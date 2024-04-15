import { Temperature } from "apps/weather/loaders/temperature.ts";
export interface Props {
  city: string;
  temperature?: Temperature | null;
  description?: string;
}

export function LoadingFallback() {
  return (
    <div className="bg-secondary mx-auto my-10 max-w-screen-md w-full m-4 rounded-md grid grid-cols-4 py-8 gap-4 items-center justify-center">
      <div className="col-span-3">
        <div className="animate-pulse flex flex-col items-center justify-center gap-4 px-4">
          <div className="bg-neutral h-6 w-full"></div>
          <div className="bg-neutral h-4 w-full max-w-sm"></div>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <div className="animate-pulse border bg-neutral h-12 w-full max-w-full mx-4">
        </div>
      </div>
    </div>
  );
}

export default function TemperatureSection(props: Props) {
  return (
    <div className="flex justify-center items-stretch h-auto mx-2 my-10">
      <div className="flex rounded-lg items-center">
        <div className="flex-col items-center text-center px-8">
          <span className="text-xl font-bold uppercase text-base-content">
            Temperatura em {props.city}
          </span>
          {props.description && <p>{props.description}</p>}
        </div>
        <div className="flex text-center md:py-10 py-5 px-8 border-l">
          <p className="uppercase font-bold text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-temperature"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
              <path d="M10 9l4 0" />
            </svg>
            {props.temperature?.celsius}°C
          </p>
        </div>
      </div>
    </div>
  );
}
