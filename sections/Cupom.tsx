export interface Props {
  couponCode: string;
  description?: string;
}

export default function Cupom(props: Props) {
  return (
    <div className="flex justify-center items-stretch h-auto mb-10 mx-2 my-20">
      <div className="flex rounded-lg overflow-hidden">
        <div className="flex-auto px-8 bg-primary flex justify-center items-center">
          <span className="text-4xl font-bold uppercase text-secondary">
            Cupom
          </span>
        </div>
        <div className="flex-auto text-center md:py-10 py-5 px-8 bg-neutral">
          <p className="uppercase font-bold text-2xl">{props.couponCode}</p>
          {props.description && <p>{props.description}</p>}
        </div>
      </div>
    </div>
  );
}
