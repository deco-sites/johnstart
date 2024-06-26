import LikeProduct from "deco-sites/johnstart/islands/LikeProduct.tsx";
import type { Product } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import { useOffer } from "../../sdk/useOffer.ts";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";

export interface Props {
  product: Product[] | null;
  animateImage?: boolean;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="flex flex-row justify-between max-w-screen-xl m-4 xl:mx-auto bg-secondary rounded-lg p-5">
      <Image
        className="md:w-full md:max-w-56 rounded-md"
        src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4823/7f559d15-4255-4c69-809d-4e332085fba1"
        alt="Duas pessoas cavalgando"
        loading="lazy"
        width={160}
        height={160}
        fetchPriority="low"
      />
      <div className="flex-grow p-4">
        <h3 className="font-bold text-3xl">Cultura Gaúcha</h3>
        <p className="mt-5">Explore a cultura gaúcha...</p>
      </div>
      <div className="flex flex-col p-4 w-full md:max-w-56">
        <a
          href="/culturas"
          className="w-full text-center bg-success hover:bg-transparent hover:text-success hover:border hover:border-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Saiba Mais
        </a>
      </div>
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div class="max-w-screen-xl m-4 xl:mx-auto bg-secondary rounded-lg p-2 sm:p-3 md:p-5">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-lg bg-neutral h-40 w-40"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-6 w-3/5 bg-neutral"></div>
          <div class="space-y-3 grid grid-cols-3 gap-4">
            <div class="flex-col col-span-2">
              <div class="h-3 bg-neutral rounded flex-1"></div>
              <div class="h-3 bg-neutral rounded flex-1 mt-4"></div>
            </div>
            <div class="h-10 bg-neutral rounded col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalProductCard(
  { product, animateImage }: Props,
) {
  const productName = product?.[0].name;
  const srcImage = product?.[0].image?.[0].url || "";
  const productDescription = product?.[0].description;
  const productID = product?.[0].productID;
  const productUrl = product?.[0].url;
  const offers = product?.[0].offers;

  const {
    price = 0,
    listPrice,
    seller = "1",
    installments,
    availability,
  } = useOffer(offers);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-between max-w-screen-xl m-4 xl:mx-auto bg-secondary rounded-lg p-2 sm:p-3 md:p-5">
      <div className="md:max-w-40 col-span-1 rounded-md overflow-hidden">
        <Image
          className={`aspect-square duration-300 w-full ${
            animateImage ? "hover:scale-110" : ""
          }`}
          src={srcImage}
          alt={productName}
          loading="lazy"
          width={160}
          height={160}
          fetchPriority="low"
        />
      </div>
      <div className="flex-grow px-4 col-span-1 sm:col-span-2 lg:col-span-4 ">
        <h3 className="font-bold text-lg sm:text-2xl md:text-3xl">
          {productName}
        </h3>
        <p className="mt-2 md:mt-5  overflow-hidden line-clamp-2">
          {productDescription}
        </p>
        <LikeProduct productID={productID} />
      </div>
      <div className="flex flex-col p-2 w-full text-center col-span-2 sm:col-span-1 lg:col-span-1">
        <span className="font-bold text-primary text-lg sm:text-2xl">
          R$ {price.toFixed(2)}
        </span>
        <AddToCartButtonVTEX
          eventParams={{ items: [] }}
          productID={productID || ""}
          seller={seller}
        />
        <a
          href={productUrl}
          className="w-full mt-4 border border-info hover:bg-info bg-transparent hover:text-white hover:border-none text-info font-bold py-2 px-2 sm:px-4 rounded"
        >
          Detalhes
        </a>
      </div>
    </div>
  );
}
