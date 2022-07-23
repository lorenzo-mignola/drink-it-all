import { RawDrink } from "./../../types/RawDrink.ts";

const parseTags = ({ strTags: rawValue }: RawDrink) => {
  if (!rawValue) {
    return [];
  }
  return rawValue.split(",");
};

export default parseTags;
