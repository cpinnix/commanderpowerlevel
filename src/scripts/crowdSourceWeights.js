const {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const logger = require("../lib/logger");
const path = require("path");
const fs = require("fs");
const Papa = require("papaparse");
const { sortBy } = require("lodash");

const WEIGHTS_DIR = path.resolve(__dirname, "..", "weights");

(async () => {
  const clientConfig = {
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  };

  const client = new S3Client(clientConfig);

  const bucket = process.env.AWS_BUCKET_WEIGHTS;

  const commandConfig = {
    Bucket: bucket,
  };

  const command = new ListObjectsCommand(commandConfig);

  let objectKeys = [];

  try {
    const response = await client.send(command);

    const contents = response.Contents;

    objectKeys = contents.map(({ Key }) => Key);

    logger.info({
      category: ["source"],
      action: ["list"],
      target: ["resolve"],
      metadata: {
        contentsCount: contents.length,
        firstContent: contents[0],
      },
    });
  } catch (error) {
    logger.info({
      category: ["source"],
      action: ["list"],
      target: ["error"],
      metadata: {
        message: error.message,
      },
    });
  }

  let weights = [];

  for (const key of objectKeys) {
    const commandConfig = {
      Bucket: bucket,
      Key: key,
    };

    const command = new GetObjectCommand(commandConfig);

    const response = await client.send(command);

    const body = await response.Body.transformToString();

    const event = JSON.parse(body);

    logger.info({
      category: ["source"],
      action: ["event"],
      target: ["resolve"],
      metadata: event,
    });

    const index = weights.findIndex(({ name }) => name === event.name);

    if (index < 0) {
      weights.push({
        name: event.name,
        count: 1,
        total: event.weight,
      });
    } else {
      weights[index] = {
        ...weights[index],
        count: weights[index].count + 1,
        total: weights[index].total + event.weight,
      };
    }
  }

  weights = weights.map(({ name, count, total }) => ({
    name,
    weight: Math.round((total / count) * 100) / 100,
  }));

  logger.info({
    category: ["source"],
    action: ["weight", "many"],
    target: ["resolve"],
    metadata: {
      count: weights.length,
      first: weights[0],
    },
  });

  const powerWeightsPath = path.resolve(WEIGHTS_DIR, "power.csv");

  const powerWeightsContent = fs.readFileSync(powerWeightsPath).toString();

  let powerWeights = Papa.parse(powerWeightsContent, { header: true }).data;

  for (const weight of weights) {
    const index = powerWeights.findIndex(({ name }) => name === weight.name);

    if (index < 0) {
      powerWeights.push({
        name: weight.name,
        weight: weight.weight,
      });
    } else {
      powerWeights[index] = {
        ...powerWeights[index],
        weight: weight.weight,
      };
    }
  }

  powerWeights = sortBy(powerWeights, ["weight", "name"]);

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["sort"],
    metadata: { count: powerWeights.length, example: powerWeights[0] },
  });

  const outputPowerWeightsContent = Papa.unparse(powerWeights, {
    quotes: true,
  });

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["unparse"],
  });

  const powerWeightsOutputPath = path.resolve(
    WEIGHTS_DIR,
    "power.crowd." + Date.now() + ".csv"
  );

  fs.writeFileSync(powerWeightsOutputPath, outputPowerWeightsContent);
})();
