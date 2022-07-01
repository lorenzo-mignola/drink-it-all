import { HandlerContext } from '$fresh/server.ts';

export const handler = async (req: Request, ctx: HandlerContext) => {
  const jsonResponse = await fetch(
    'http://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  const jsonData = await jsonResponse.json();

  return new Response(JSON.stringify(jsonData));
};
