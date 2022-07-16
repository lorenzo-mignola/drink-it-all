/** @jsx h */
import { h } from 'preact';
import { Drink } from '../../types/Drink.ts';

interface CocktailIngredientsProps {
  ingredients: Drink['ingredients'];
}

const CocktailIngredients = ({ ingredients }: CocktailIngredientsProps) => {
  return (
    <ul>
      {ingredients.map(ingredient => (
        <li>
          &#127865; {ingredient.name}{' '}
          <small>
            <i>{ingredient.measure || ''}</i>
          </small>
        </li>
      ))}
    </ul>
  );
};

export default CocktailIngredients;
