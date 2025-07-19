import { get, scan } from "@/libs/dynamoUrils";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const key = searchParams.get("key");
  let result = {};
  if (id && key) {
    result = await get(id, key);
  } else {
    result = await scan();
  }
  if (result) {
    return Response.json(result);
  } else {
    return Response.json({ debugMessage: `failed` });
  }
}
