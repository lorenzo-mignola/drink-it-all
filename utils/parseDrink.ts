import empty from '../test/mock/emptyDrink.json' assert { type: 'json' };
import { Drink } from '../types/Drink.ts';
import { RawDrink } from '../types/RawDrink.ts';

const parseAlcoholic = (rawValue: RawDrink['strAlcoholic']) => {
  if (rawValue === 'Alcoholic') {
    return true;
  }
  if (rawValue === 'Non alcoholic') {
    return true;
  }
  return null;
};

const parseDrink = (raw: RawDrink): Drink => {
  return {
    id: Number(raw.idDrink),
    name: raw.strDrink,
    thumbnail: raw.strDrinkThumb,
    alcoholic: parseAlcoholic(raw.strAlcoholic),
    glass: raw.strGlass,
    tags: empty['tags'],
    instructions: empty['instructions'],
    ingredients: empty['ingredients'],
    lastUpdate: empty['lastUpdate']
  };
};

export default parseDrink;
