/** @jsx h */
import { h } from "preact";
import { Drink } from "../../types/Drink.ts";
import { tw } from "@twind";
import CocktailImage from "./CocktailImage.tsx";
import CocktailDetail from "./CocktailDetail.tsx";
import CocktailIngredients from "./CocktailIngredients.tsx";
import CocktailName from "./CocktailName.tsx";

interface CocktailProps {
  drink: Drink;
}

const Cocktail = ({ drink }: CocktailProps) => {
  return (
    <div
      class={tw`md:w-5/12 bg-gray-100 rounded-md p-8 shadow-md flex-auto flex-grow`}
    >
      <CocktailName name={drink.name} />
      <CocktailImage thumbnail={drink.thumbnail} />
      <CocktailDetail label="Glass" value={drink.glass || ""} />
      <CocktailDetail
        label="Alcoholic"
        value={drink.alcoholic ? "Yes" : "No"}
      />
      <CocktailDetail
        label="Ingredients"
        value={<CocktailIngredients ingredients={drink.ingredients} />}
      />
      <CocktailDetail label="Instructions" value={drink.instructions.en} />
    </div>
  );
};

export default Cocktail;
