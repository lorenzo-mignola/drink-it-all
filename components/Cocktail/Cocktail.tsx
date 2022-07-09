/** @jsx h */
import { h } from 'preact';
import { Drink } from '../../types/Drink.ts';
import CocktailImage from './CocktailImage.tsx';

interface CocktailProps {
  drink: Drink;
}

const Cocktail = ({ drink }: CocktailProps) => {
  return (
    <div>
      <h1>{drink.name}</h1>
      <CocktailImage thumbnail={drink.thumbnail} />
    </div>
  );
};

export default Cocktail;
