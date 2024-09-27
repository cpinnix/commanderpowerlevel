const path = require("path");
const fs = require("fs");
const logger = require("../lib/logger");
const { uniq, uniqBy, sortBy } = require("lodash");
const Papa = require("papaparse");

const DECK_DIR = path.resolve(__dirname, "..", "decks");
const WEIGHTS_DIR = path.resolve(__dirname, "..", "weights");

(async () => {
  // logger.info({
  //   category: ["harvest"],
  //   target: ["deck"],
  //   action: ["start"],
  // });

  let harvestedCardNames = [];

  let filenames = fs.readdirSync(DECK_DIR);

  filenames = filenames.filter((filename) => path.extname(filename) === ".txt");

  for (const filename of filenames) {
    logger.info({
      category: ["harvest"],
      target: ["filenames"],
      action: ["found"],
      metadata: { filename },
    });

    const filePath = path.resolve(DECK_DIR, filename);

    const fileContents = fs.readFileSync(filePath).toString();

    const cardNames = fileContents.split("\n").map(
      (raw) =>
        raw
          .split(" ")
          .slice(1)
          .join(" ")
          .match(new RegExp(/(.*?)(?= \()/))[0]
    );

    for (const cardName of cardNames) {
      harvestedCardNames.push(cardName);
    }
  }

  harvestedCardNames = uniq(harvestedCardNames);

  logger.info({
    category: ["harvest"],
    target: ["card", "name", "many"],
    action: ["found"],
    metadata: { count: harvestedCardNames.length },
  });

  const powerWeightsPath = path.resolve(WEIGHTS_DIR, "power.csv");

  const powerWeightsContent = fs.readFileSync(powerWeightsPath).toString();

  let powerWeights = Papa.parse(powerWeightsContent, { header: true }).data;

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["parse"],
    metadata: { count: powerWeights.length, example: powerWeights[0] },
  });

  powerWeights = uniqBy(powerWeights, ({ name }) => name);

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["unique"],
    metadata: { count: powerWeights.length },
  });

  for (const harvestedCardName of harvestedCardNames) {
    powerWeights.push({
      name: harvestedCardName,
      weight: null,
    });
  }

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["merge"],
    metadata: { count: powerWeights.length },
  });

  powerWeights = uniqBy(powerWeights, ({ name }) => name);

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["unique"],
    metadata: { count: powerWeights.length },
  });

  powerWeights = sortBy(powerWeights, ["weight", "name"]);

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["sort"],
    metadata: { count: powerWeights.length, example: powerWeights[0] },
  });

  powerWeights = powerWeights.map(({ name, weight }) => ({ name, weight }));

  logger.info({
    category: ["harvest"],
    target: ["power", "weight", "many"],
    action: ["clean"],
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
    "power." + Date.now() + ".csv"
  );

  fs.writeFileSync(powerWeightsOutputPath, outputPowerWeightsContent);
})();
