import { Handlers } from "$fresh/server.ts";
import { CocktailService } from "./../../services/CocktailService.ts";

export const handler: Handlers = {
  async GET() {
    const cocktails = await Promise.all([
      CocktailService.getRandomCocktail(),
      CocktailService.getRandomCocktail(),
      CocktailService.getRandomCocktail(),
    ]);

    return new Response(JSON.stringify(cocktails));
  },
};
