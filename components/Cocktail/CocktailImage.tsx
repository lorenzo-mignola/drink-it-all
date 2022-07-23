/** @jsx h */
import { h } from 'preact';
import { Drink } from '../../types/Drink.ts';
import { tw } from '@twind';

interface CocktailImage {
  thumbnail: Drink['thumbnail'];
}

const CocktailImage = ({ thumbnail }: CocktailImage) => {
  return (
    <div class={tw`w-8/12 mr-auto ml-auto my-5`}>
      <img src={thumbnail} alt='thumbnail' class={tw`rounded-full`} />
    </div>
  );
};

export default CocktailImage;
