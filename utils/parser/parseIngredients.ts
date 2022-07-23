import { Ingredient } from "./../../types/Drink.ts";
import { RawDrink } from "./../../types/RawDrink.ts";

const isIngredient = (key: string) => key.includes("strIngredient");
const isMeasure = (key: string) => key.includes("strMeasure");
const isKeyIngredient = (key: string) => isIngredient(key) || isMeasure(key);
const cleanKey = (key: string) => Number(key.replace(/[a-zA-Z]/g, ""));
const cleanValue = (val?: string | null) =>
  val?.trim().replace(/(\\n)|(\n)/g, "") || null;

const generateObjectIngredients = (
  all: ObjectIngredients,
  key: string,
  raw: RawDrink,
) => {
  all[cleanKey(key)] = {
    ...all[cleanKey(key)],
    [isIngredient(key) ? "name" : "measure"]: cleanValue(
      raw[key as keyof RawDrink],
    ),
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
      {} as ObjectIngredients,
    );
  const ingredients = Object.values(allIngredients) as Ingredient[];
  return ingredients.filter(isIngredientNotNull);
};

export default parseIngredients;
