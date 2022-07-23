/** @jsx h */
import { h, ComponentChildren } from 'preact';
import { tw } from '@twind';

interface CocktailDetailProps {
  label: string;
  value: string | ComponentChildren;
}

const CocktailDetail = ({ label, value }: CocktailDetailProps) => {
  return (
    <div class={tw`md:text-lg my-6`}>
      <p class={tw`text-md md:text-xl`}>
        <b>{label}</b>
      </p>
      <p>{value}</p>
    </div>
  );
};

export default CocktailDetail;
