import { Quotes } from "../loaders/getquotes.ts";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  title: string;
  description: string;
  items: Quotes;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return <div className="text-red-800">Error: {error?.message}</div>;
}

export function LoadingFallback() {
  return (
    <BannerList
      title="Loading"
      description="Carregando os dados..."
      items={{ data: ["hello", "Hello"] }}
    />
  );
}

export default function BannerList(props: Props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ul>
        {props.items.data.map((item) => <li>{item}</li>)}
      </ul>
      <button
        {...usePartialSection({ props: { title: "PARTIALS" }, mode: "append" })}
      >
        Clique
      </button>
    </div>
  );
}
