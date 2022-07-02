import { CocktailService } from './../../../services/CocktailService.ts';
import { HandlerContext, Handlers } from '$fresh/server.ts';

const returnDefault = () => new Response(JSON.stringify({}));

export const handler: Handlers = {
  async GET(_: Request, ctx: HandlerContext) {
    const { id } = ctx.params;
    if (!id || Number.isNaN(Number(id))) {
      return returnDefault();
    }

    const drink = await CocktailService.getCocktailById(Number(id));
    if (!drink) {
      return returnDefault();
    }

    return new Response(JSON.stringify(drink));
  }
};
