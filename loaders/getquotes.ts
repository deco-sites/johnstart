import { AppContext } from "deco-sites/johnstart/apps/site.ts";

export interface Quotes {
  data: string[];
}

export interface Props {
  quantity?: number;
}

export default async function getquotes(
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<Quotes> {
  await ctx.invoke["deco-sites/johnstart"].actions.sendPost({
    text: "Get Quotes was invoked",
  });
  const promises = Array.from({ length: props.quantity ?? 1 }).map(() => {
    return fetch("https://api.quotable.io/random").then((res) => res.json());
  });

  const responses = await Promise.all(promises);

  return { data: responses.map((res) => res.content) };
}
