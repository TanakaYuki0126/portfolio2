import {
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandOutput,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";

const TABLE_NAME = "PortfolioAssets";

const ddb = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY_ID as string,
  },
  region: "ap-northeast-1",
});

export async function get(id: string, key: string) {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: { S: id },
      key: { S: key },
    },
  };
  const result = await ddb.send(new GetItemCommand(params));
  return removeType(result.Item);
}

export async function scan() {
  const params = {
    TableName: TABLE_NAME,
  };
  const result = await ddb.send(new ScanCommand(params));
  return result;
}

const removeType = (dynamoResultItem: GetItemCommandOutput["Item"]) => {
  const result: { [key: string]: unknown } = {};
  Object.keys(dynamoResultItem!).map((key) => {
    const value = Object.values(dynamoResultItem![key])[0];
    result[key] = value;
  });
  return result;
};
