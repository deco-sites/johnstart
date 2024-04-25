import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  images: Array<ImageWidget>;
  /**
   * @ignore
   */
  limit: number;
}

export default function PartialImageGallery({ images, limit = 3 }: Props) {
  return (
    <div className="flex text-center flex-col justify-center p-4 mx-auto max-w-screen-xl">
      <h2 className="font-semibold text-2xl my-5">Paisagens do Sul</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mb-5 max-w-full">
        {images.map((img, idx) => (
          idx < limit && (
            <Image
              className="rounded-lg w-full transition-transform duration-300 transform-gpu hover:scale-105 hover:z-10 aspect-video"
              src={img}
              loading="lazy"
              fetchPriority="low"
              width={402}
              height={226}
            />
          )
        ))}
      </div>
      <div className="h-20 flex justify-center items-center">
        {limit < images.length && (
          <button
            {...usePartialSection({
              props: { limit: limit + 1 },
            })}
            className="w-56 bg-success m-auto hover:bg-transparent hover:text-success border border-success text-white font-bold py-2 px-4 rounded"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
