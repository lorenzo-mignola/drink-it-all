/** @jsx h */
import { h } from 'preact';
import { Drink } from '../../types/Drink.ts';

interface CocktailImage {
  thumbnail: Drink['thumbnail'];
}

const CocktailImage = ({ thumbnail }: CocktailImage) => {
  return <img src={thumbnail} alt='thumbnail' />;
};

export default CocktailImage;
