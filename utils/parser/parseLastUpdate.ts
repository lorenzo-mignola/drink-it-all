import { RawDrink } from "./../../types/RawDrink.ts";

const parseLastUpdate = ({ dateModified: rawValue }: RawDrink) => {
  if (!rawValue) {
    return null;
  }
  return new Date(rawValue);
};

export default parseLastUpdate;
