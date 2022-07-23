import { CocktailService } from './../../services/CocktailService.ts';
import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {
  async GET(req: Request) {
    const requestUrl = new URL(req.url);
    const query = requestUrl.searchParams.get('query');

    const drinks = await CocktailService.searchCocktail(query);

    return new Response(JSON.stringify(drinks), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
