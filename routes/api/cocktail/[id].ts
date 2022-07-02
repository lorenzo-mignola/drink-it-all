import { HandlerContext, Handlers } from '$fresh/server.ts';
import parseDrink from '../../../utils/parser/parseDrink.ts';
import { CocktailResponse } from './../../../types/CocktailResponse.ts';

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const { id } = ctx.params;
    const drinkResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const rawDrinks: CocktailResponse = await drinkResponse.json();
    const { drinks } = rawDrinks;
    if (!drinks) {
      return new Response(JSON.stringify({}));
    }
    const [drink] = drinks.map(parseDrink);
    return new Response(JSON.stringify(drink));
  }
};
