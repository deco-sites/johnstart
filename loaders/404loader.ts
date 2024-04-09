import { AppContext } from "deco-sites/johnstart/apps/site.ts";
import { Quotes } from "deco-sites/johnstart/loaders/getquotes.ts";

export default async function mixed(
  _props: unknown,
  _req: Request,
  ctx: AppContext,
): Promise<Quotes> {
  const result = await ctx.invoke["deco-sites/johnstart"].loaders.getquotes({
    quantity: 5,
  });

  return { data: { ...result.data } };
}
