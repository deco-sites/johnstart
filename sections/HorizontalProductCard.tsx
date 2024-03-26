import Rating from "../components/daisy/Rating.tsx";

export interface Props {
  image: string;
  title: string;
  description: string;
  price: number;
}

export default function ({ image, title, description, price }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-screen-xl m-4 xl:mx-auto bg-secondary rounded-lg p-5">
      <img
        className="md:w-full md:max-w-56 rounded-md"
        src={image}
        alt={title}
        decoding="async"
      />
      <div className="flex-grow p-4">
        <h3 className="font-bold text-3xl">{title}</h3>
        <Rating maxRating={5} />
        <p className="mt-5">{description}</p>
      </div>
      <div className="flex flex-col p-4 w-full md:max-w-56">
        <span className="font-bold text-primary text-2xl">
          R$ {price.toFixed(2)}
        </span>
        <button className="w-full bg-success hover:bg-transparent hover:text-success hover:border hover:border-green-600 text-white font-bold py-2 px-4 rounded">
          Adicionar
        </button>
      </div>
    </div>
  );
}
