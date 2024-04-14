import { MatchContext } from "deco/blocks/matcher.ts";

export interface Props {
  utm: string;
}

export default function utm(props: Props, ctx: MatchContext) {
  const url = ctx.request.url;
  const newUrl = new URL(url);
  const utmParam = newUrl.searchParams.get("utmcampaign");

  return utmParam?.includes(props.utm) ?? false;
}
