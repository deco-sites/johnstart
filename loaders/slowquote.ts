import { Quotes } from "./getquotes.ts";

export interface Prop {
  quantity?: number;
}

export default async function apiquotes(
  props: Prop,
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  await fetch(
    `https://rich-puma-16-d8ebp0p2c7ba.deno.dev/noop?N=${props.quantity ?? 1}`,
  );
  return { data: [] };
}
