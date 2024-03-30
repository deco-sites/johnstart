import { Quotes } from "../loaders/getquotes.ts";
import Skeleton from "../components/ui/Skeleton.tsx";
import LikeProduct from "../islands/Like.tsx";
import { ProductDetails } from "deco-sites/johnstart/loaders/getproductdetail.ts";

export interface Props {
  data: ProductDetails;
  items: Quotes;
}

export function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div className="flex flex-row justify-between max-w-screen-xl m-4 xl:mx-auto bg-secondary rounded-lg p-5">
      <img
        className="md:w-full md:max-w-56 rounded-md"
        src="https://images.unsplash.com/photo-1574614296357-20e8639cde79"
        alt="Duas pessoas cavalgando"
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
    <div className="flex flex-col md:flex-row justify-between max-w-screen-xl m-4 xl:mx-auto bg-secondary rounded-lg p-5">
      <Skeleton variant="rect" width={160} height={160} />
      <div className="flex pl-2 flex-col gap-4">
        <div className="mt-5">
          <Skeleton variant="rect" width={200} height={30} />
          <Skeleton variant="rect" width={120} height={30} />
        </div>
        <div className="mt-4">
          <Skeleton variant="text" width={300} height={20} />
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-col gap-4 p-4 w-full md:max-w-56">
        <Skeleton variant="text" width={120} height={20} />
        <Skeleton variant="rect" width={200} height={30} />
      </div>
    </div>
  );
}

export default function HorizontalProductCard(
  { data }: Props,
) {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-6 justify-between max-w-screen-xl m-4 xl:mx-auto bg-secondary rounded-lg p-2 sm:p-3 md:p-5">
      <div className="md:max-w-40 col-span-1">
        <img
          className="aspect-square rounded-md"
          src={data.data.product.image && data.data.product.image[0].url}
          alt={data.data.product.name}
        />
      </div>
      <div className="flex-grow px-4 col-span-2 lg:col-span-4 ">
        <h3 className="font-bold text-lg sm:text-2xl md:text-3xl">
          {data.data.product.name}
        </h3>
        <p className="mt-2 md:mt-5  overflow-hidden line-clamp-3">
          {data.data.product.description}
        </p>
        <LikeProduct />
      </div>
      <div className="flex flex-col p-2 w-full text-center col-span-1 lg:col-span-1">
        <span className="font-bold text-primary text-lg sm:text-2xl">
          R$ {data.data.product.offers?.highPrice.toFixed(2)}
        </span>
        <button className="w-full bg-success hover:bg-transparent hover:text-success hover:border hover:border-green-600 text-white font-bold py-2 px-2 sm:px-4 rounded">
          Comprar
        </button>
      </div>
    </div>
  );
}
