export interface Drink {
  id: number;
  name: string;
  thumbnail: string;
  alcoholic: boolean | null;
  glass: string | null;
  tags: string[];
  instructions: Instructions;
  ingredients: Ingredient[];
  lastUpdate: Date | null;
  link: string;
}

export interface Instructions {
  en: string;
  es?: string;
  de?: string;
  fr?: string;
  it?: string;
}

export interface Ingredient {
  name: string;
  measure: string;
}
