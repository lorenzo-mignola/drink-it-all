/** @jsx h */
import { h } from 'preact';
import { Drink } from '../../types/Drink.ts';
import { tw } from '@twind';

interface CocktailNameProps {
  name: Drink['name'];
}

const CocktailName = ({ name }: CocktailNameProps) => {
  return (
    <h1 class={tw`text-2xl`}>
      <b>{name}</b>
    </h1>
  );
};

export default CocktailName;
