import { scan } from "@/libs/dynamoUrils";

export async function GET() {
  const result = await scan();
  if (result) {
    return Response.json(result);
  } else {
    return Response.json({ debugMessage: `failed` });
  }
}
