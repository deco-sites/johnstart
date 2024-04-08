import { AppContext } from "deco-sites/johnstart/apps/site.ts";
import { SectionProps } from "deco/mod.ts";
export interface Props {
  title: string;
  limit?: number;
}

export interface Country {
  name: string;
  media: {
    flag: string;
  };
  id: number;
}

export const loader = async (props: Props, req: Request, ctx: AppContext) => {
  const limit = props.limit ?? 9;
  const countriesResponse = await fetch(
    "https://api.sampleapis.com/countries/countries",
  );
  const allCountries = await countriesResponse.json() as Country[];
  const countries = allCountries.splice(0, limit);
  return {
    ...props,
    countries,
  };
};

export default function LoaderExample(
  { title, countries }: SectionProps<typeof loader>,
) {
  return (
    <div className="flex flex-col items-center w-[500px] mx-auto gap-4 p-16">
      <h1 className="text-center py-10 text-lg">{title}</h1>
      {countries.map((country) => (
        <div className="rounded-lg w-full border flex gap-4 items-center bg-gray-300 p-4">
          <img src={country.media.flag} alt="" />
          <span>{country.name}</span>
        </div>
      ))}
    </div>
  );
}
