export interface Quotes {
  data: string[];
}

export interface Props {
  quantity?: number;
}

export default async function getquotes(props: Props): Promise<Quotes> {
  const promises = Array.from({ length: props.quantity ?? 1 }).map(() => {
    return fetch("https://api.quotable.io/random").then((res) => res.json());
  });

  const responses = await Promise.all(promises);

  return { data: responses.map((res) => res.content) };
}
