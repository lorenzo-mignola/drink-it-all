import parseDrink from '../utils/parser/parseDrink.ts';
import { CocktailResponse } from './../types/CocktailResponse.ts';

export class CocktailService {
  static async getCocktailById(id: number) {
    const drinkResponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const rawDrinks: CocktailResponse = await drinkResponse.json();
    const { drinks } = rawDrinks;
    if (!drinks) {
      return null;
    }
    const [drink] = drinks.map(parseDrink);
    return drink;
  }

  static getRandomCocktail = async () => {
    const drinkResponse = await fetch(
      'http://www.thecocktaildb.com/api/json/v1/1/random.php'
    );
    const rawDrinks: CocktailResponse = await drinkResponse.json();
    return rawDrinks.drinks.map(parseDrink)[0];
  };
}
