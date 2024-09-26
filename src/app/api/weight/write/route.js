import { format } from "date-fns";

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4 } = require("uuid");

export async function POST(request, response) {
  const data = await request.json();

  const clientConfig = {
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  };

  const client = new S3Client(clientConfig);

  const date = new Date();

  const key = format(date, "yyyy_MM_dd_hh_mm_ss") + v4();
  const bucket = "commanderpowerlevel";
  const body = JSON.stringify({
    ...data,
    date: date.toISOString(),
    timestamp: date.valueOf(),
  });

  const commandConfig = {
    Key: key,
    Bucket: bucket,
    Body: body,
  };

  const command = new PutObjectCommand(commandConfig);

  try {
    await client.send(command);
    return Response.json({});
  } catch (e) {
    return Response.error();
  }
}
