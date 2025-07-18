import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const TABLE_NAME = "PortfolioAssets";

const ddb = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY_ID as string,
  },
  region: "ap-northeast-1",
});

export async function scan() {
  const params = {
    TableName: TABLE_NAME,
  };
  const result = await ddb.send(new ScanCommand(params));
  return result;
}
