import { Handlers } from '$fresh/server.ts';
import { CocktailResponse } from './../../types/CocktailResponse.ts';

import parseDrink from '../../utils/parser/parseDrink.ts';

const getRandomCocktail = async () => {
  const drinkResponse = await fetch(
    'http://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  const rawDrinks: CocktailResponse = await drinkResponse.json();
  return rawDrinks.drinks.map(parseDrink)[0];
};

export const handler: Handlers = {
  async GET() {
    const cocktails = await Promise.all([
      getRandomCocktail(),
      getRandomCocktail(),
      getRandomCocktail()
    ]);

    return new Response(JSON.stringify(cocktails));
  }
};
