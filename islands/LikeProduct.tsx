import { useSignal } from "@preact/signals";
import { likeData } from "../sdk/useLikes.ts";
import { invoke } from "deco-sites/johnstart/runtime.ts";
import { useEffect } from "preact/hooks";
import { Bounce, toast, ToastContainer } from "react-toastify";

export interface LikeProductProps {
  productID: string | undefined;
}

export default function LikeProduct({ productID }: LikeProductProps) {
  const likeCount = useSignal(0);
  const selected = useSignal(false);

  // deno-lint-ignore no-explicit-any
  const ToastContainerComponent = ToastContainer as any;

  useEffect(() => {
    const updateTotals = async () => {
      const totalLikes = await invoke["deco-sites/johnstart"].loaders
        .totalLikesLoader();
      const totalLikesProduct = await invoke["deco-sites/johnstart"].loaders
        .totalLikesProductLoader({ productID });
      likeData.value = totalLikes.total;
      likeCount.value = totalLikesProduct.product;
    };

    updateTotals();
    setInterval(updateTotals, 30000);
  });

  const handleToggleLike = async (e: MouseEvent) => {
    e.preventDefault();
    const result = await invoke["deco-sites/johnstart"].actions
      .sendLikesAction({ productID });
    selected.value = true;
    likeData.value = result.total;
    likeCount.value = result.product;
    toast.success("Voto registrado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <button
        className={`flex items-start gap-4 my-4 font-bold py-2 rounded ${
          selected.value && "text-info"
        }`}
        onClick={(e) => handleToggleLike(e)}
      >
        {selected.value
          ? (
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-mood-check"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" />
              <path d="M9 10h.01" />
              <path d="M15 10h.01" />
              <path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
              <path d="M15 19l2 2l4 -4" />
            </svg>
          )
          : (
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-mood-smile"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 10l.01 0" />
              <path d="M15 10l.01 0" />
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
            </svg>
          )}
        {likeCount.value}
      </button>
      <ToastContainerComponent />
    </>
  );
}
