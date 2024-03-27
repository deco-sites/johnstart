import { Temperature } from "apps/weather/loaders/temperature.ts";
export interface Props {
  city: string;
  temperature?: Temperature | null;
}

export default function TemperatureSection({ city, temperature }: Props) {
  return (
    <button className="fixed bottom-4 right-4 bg-primary hover:bg-acent text-white font-bold py-2 px-4 rounded-full z-10">
      <div className="flex flex-col items-center">
        <span>{city}</span>
        <span>{temperature?.celsius}°</span>
      </div>
    </button>
  );
}
