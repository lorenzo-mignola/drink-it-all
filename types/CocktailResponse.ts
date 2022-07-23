import { RawDrink } from './RawDrink.ts';
export interface CocktailResponse {
  drinks: RawDrink[] | null;
}
