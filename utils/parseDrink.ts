import { Drink } from '../types/Drink.ts';
import { RawDrink } from '../types/RawDrink.ts';
import empty from '../test/mock/emptyDrink.json' assert { type: 'json' };

const parseDrink = (raw: RawDrink): Drink => {
  return {
    id: Number(raw.idDrink),
    name: raw.strDrink,
    thumbnail: raw.strDrinkThumb,
    alcoholic: empty['alcoholic'],
    glass: empty['glass'],
    tags: empty['tags'],
    instructions: empty['instructions'],
    ingredients: empty['ingredients'],
    lastUpdate: empty['lastUpdate']
  };
};

export default parseDrink;
