/** @jsx h */
import { h, ComponentChildren } from 'preact';
import { tw } from '@twind';

interface CocktailDetailProps {
  label: string;
  value: string | ComponentChildren;
}

const CocktailDetail = ({ label, value }: CocktailDetailProps) => {
  return (
    <div className={tw`md:text-lg my-4 flex gap-2`}>
      <b>{label}: </b>
      {value}
    </div>
  );
};

export default CocktailDetail;
