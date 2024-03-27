import { ProductDetailsPage } from "apps/commerce/types.ts";

export interface ProductDetails {
  data: ProductDetailsPage;
}

export default async function getproductdetail(): Promise<ProductDetails> {
  const detailsPage = await fetch(
    "https://raw.githubusercontent.com/deco-sites/campdemo/main/pdp.json",
  ).then((res) => res.json());

  return detailsPage;
}
