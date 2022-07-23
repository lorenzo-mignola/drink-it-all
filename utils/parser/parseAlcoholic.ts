import { RawDrink } from "./../../types/RawDrink.ts";

const parseAlcoholic = ({ strAlcoholic: rawValue }: RawDrink) => {
  if (rawValue === "Alcoholic") {
    return true;
  }
  if (rawValue === "Non alcoholic") {
    return false;
  }
  return null;
};

export default parseAlcoholic;
