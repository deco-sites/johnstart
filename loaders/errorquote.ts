import { Quotes } from "./getquotes.ts";

export interface Prop {
  quantity?: number;
}

export default function apiquotables(
  _req: Request,
  _ctx: unknown,
): Promise<Quotes> {
  throw new Error("Ops... error from loader");
}
