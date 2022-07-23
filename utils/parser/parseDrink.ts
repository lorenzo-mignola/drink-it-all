import { Drink } from "../../types/Drink.ts";
import { RawDrink } from "../../types/RawDrink.ts";
import parseAlcoholic from "./parseAlcoholic.ts";
import parseIngredients from "./parseIngredients.ts";
import parseTags from "./parseTags.ts";
import parseLastUpdate from "./parseLastUpdate.ts";
import parseInstructions from "./parseInstructions.ts";

const parseDrink = (raw: RawDrink): Drink => {
  return {
    id: Number(raw.idDrink),
    name: raw.strDrink,
    thumbnail: raw.strDrinkThumb,
    alcoholic: parseAlcoholic(raw),
    glass: raw.strGlass,
    tags: parseTags(raw),
    instructions: parseInstructions(raw),
    ingredients: parseIngredients(raw),
    lastUpdate: parseLastUpdate(raw),
    link: `/api/cocktail/${raw.idDrink}`,
  };
};

export default parseDrink;
