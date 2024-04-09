export interface Props {
  siteId: string;
  productId: number;
}

export default async function registervote(
  { productId, siteId }: Props,
): Promise<void> {
  const url = "https://camp-api.deco.cx/event";
  const requestBody = { productId };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": siteId,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error("Falha ao registrar voto");
  }
}
