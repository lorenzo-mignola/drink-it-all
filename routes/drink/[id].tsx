/** @jsx h */
import { h } from 'preact';
import { Handlers, PageProps } from '$fresh/server.ts';
import { Drink } from '../../types/Drink.ts';
import { CocktailService } from '../../services/CocktailService.ts';
import Layout from '../../components/Layout.tsx';
import Cocktail from '../../components/Cocktail/Cocktail.tsx';
import { tw } from '@twind';

export const handler: Handlers<Drink | null> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    if (!id || Number.isNaN(Number(id))) {
      return ctx.render(null);
    }

    const drink = await CocktailService.getCocktailById(Number(id));
    if (!drink) {
      return ctx.render(null);
    }

    return ctx.render(drink);
  }
};

export default function DrinkId({ data }: PageProps<Drink | null>) {
  if (!data) {
    return <h1>No cocktail found</h1>;
  }

  return (
    <Layout>
      <div className={tw`flex justify-center mt-10`}>
        <Cocktail drink={data} />
      </div>
    </Layout>
  );
}
