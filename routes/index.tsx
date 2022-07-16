/** @jsx h */
import { tw } from '@twind';
import { Handlers, PageProps } from 'https://deno.land/x/fresh@1.0.0/server.ts';
import { h } from 'preact';
import { css } from 'twind/css';
import Cocktail from '../components/Cocktail/Cocktail.tsx';
import Layout from '../components/Layout.tsx';
import ScrollDown from '../components/ScrollDown.tsx';
import SearchInput from '../islands/SearchInput.tsx';
import { CocktailService } from '../services/CocktailService.ts';
import { Drink } from '../types/Drink.ts';

export const handler: Handlers<Drink[]> = {
  async GET(_, ctx) {
    const drink1 = await CocktailService.getRandomCocktail();
    const drink2 = await CocktailService.getRandomCocktail();

    // return ctx.render([]);
    return ctx.render([drink1, drink2]);
  }
};

export default function Home({ data }: PageProps<Drink[]>) {
  const customStyle = tw(
    css({
      background: `url('/bg.jpg') no-repeat center center fixed`,
      backgroundSize: 'cover',
      height: 'calc(100vh - 230px)'
    })
  );

  return (
    <Layout>
      <div className={tw`h-1/2 ${customStyle}`}>
        <div className={tw`flex justify-center absolute bottom-1/2 w-full`}>
          <SearchInput />
        </div>
        <div className={tw`absolute bottom-44 left-1/2`}>
          <ScrollDown />
        </div>
      </div>
      <h1 className={tw`text(4xl center primary-dark) font-bold m-8 mt-10`}>
        Some suggestion
      </h1>
      <div className={tw`flex p-10 gap-5 justify-center flex-wrap h-screen`}>
        {data.map(drink => (
          <Cocktail drink={drink} />
        ))}
      </div>
    </Layout>
  );
}
