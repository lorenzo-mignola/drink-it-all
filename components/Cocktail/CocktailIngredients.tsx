/** @jsx h */
import { h } from 'preact';
import { Drink } from '../../types/Drink.ts';

interface CocktailIngredientsProps {
  ingredients: Drink['ingredients'];
}

const CocktailIngredients = ({ ingredients }: CocktailIngredientsProps) => {
  return (
    <span>
      {ingredients.map(ingredient => (
        <p>
          {ingredient.name}{' '}
          <small>
            <i>{ingredient.measure || ''}</i>
          </small>
        </p>
      ))}
    </span>
  );
};

export default CocktailIngredients;
