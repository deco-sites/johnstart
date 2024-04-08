import { Temperature } from "apps/weather/loaders/temperature.ts";
export interface Props {
  temperature?: Temperature | null;
}

export default function TemperatureFloating({ temperature }: Props) {
  return (
    <button className="fixed bottom-4 right-4 bg-primary hover:bg-acent text-white font-bold py-8 px-4 rounded-full z-10">
      <div className="flex items-center">
        <svg
          xmlns="18"
          height="18"
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
        {temperature?.celsius}°
      </div>
    </button>
  );
}
