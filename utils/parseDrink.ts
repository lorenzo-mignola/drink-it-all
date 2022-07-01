import { Ingredient } from './../types/Drink.ts';
import empty from '../test/mock/emptyDrink.json' assert { type: 'json' };
import { Drink } from '../types/Drink.ts';
import { RawDrink } from '../types/RawDrink.ts';

const parseAlcoholic = ({ strAlcoholic: rawValue }: RawDrink) => {
  if (rawValue === 'Alcoholic') {
    return true;
  }
  if (rawValue === 'Non alcoholic') {
    return true;
  }
  return null;
};

const parseTags = ({ strTags: rawValue }: RawDrink) => {
  if (!rawValue) {
    return [];
  }
  return rawValue.split(',');
};

const isIngredient = (key: string) => key.includes('strIngredient');
const isMeasure = (key: string) => key.includes('strMeasure');
const isKeyIngredient = (key: string) => isIngredient(key) || isMeasure(key);
const cleanKey = (key: string) => Number(key.replace(/[a-zA-Z]/g, ''));
const cleanValue = (val?: string | null) =>
  val?.trim().replace(/(\\n)|(\n)/g, '') || null;

const generateObjectIngredients = (
  all: ObjectIngredients,
  key: string,
  raw: RawDrink
) => {
  all[cleanKey(key)] = {
    ...all[cleanKey(key)],
    [isIngredient(key) ? 'name' : 'measure']: cleanValue(
      raw[key as keyof RawDrink]
    )
  };
  return all;
};

const isIngredientNotNull = ({ name }: Ingredient) => name !== null;

type ObjectIngredients = {
  [key: number]: Partial<Ingredient>;
};

const parseIngredients = (raw: RawDrink) => {
  const allIngredients = Object.keys(raw)
    .filter(isKeyIngredient)
    .reduce(
      (all: ObjectIngredients, key: string) =>
        generateObjectIngredients(all, key, raw),
      {} as ObjectIngredients
    );
  const ingredients = Object.values(allIngredients) as Ingredient[];
  return ingredients.filter(isIngredientNotNull);
};

const parseDrink = (raw: RawDrink): Drink => {
  return {
    id: Number(raw.idDrink),
    name: raw.strDrink,
    thumbnail: raw.strDrinkThumb,
    alcoholic: parseAlcoholic(raw),
    glass: raw.strGlass,
    tags: parseTags(raw),
    instructions: empty['instructions'],
    ingredients: parseIngredients(raw),
    lastUpdate: empty['lastUpdate']
  };
};

export default parseDrink;
