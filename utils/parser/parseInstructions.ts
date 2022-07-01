import { Instructions } from './../../types/Drink.ts';
import { RawDrink } from './../../types/RawDrink.ts';

const parseLastUpdate = (raw: RawDrink): Instructions => {
  const {
    strInstructions,
    strInstructionsIT,
    strInstructionsES,
    strInstructionsDE,
    strInstructionsFR
  } = raw;
  return JSON.parse(
    JSON.stringify({
      en: strInstructions,
      it: strInstructionsIT || undefined,
      es: strInstructionsES || undefined,
      de: strInstructionsDE || undefined,
      fr: strInstructionsFR || undefined
    })
  );
};

export default parseLastUpdate;
