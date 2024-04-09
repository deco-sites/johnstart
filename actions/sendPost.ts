export interface Props {
  text: string;
}

export interface Result {
  status: "ok" | "failure";
}

export default async function sendPost(
  props: Props,
  _req: Request,
  _ctx: unknown,
): Promise<Result> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(props),
  });
  console.log("INVOKED", props.text);

  if (response.ok) {
    return { status: "ok" };
  }
  return { status: "failure" };
}
