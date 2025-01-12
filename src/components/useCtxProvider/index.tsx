import { component$, useContextProvider, useSignal } from "@builder.io/qwik";
import { PriceContext } from "~/context/price.context";

interface props {
  price: number;
}
export default component$((props: props) => {
  const HoverPrice = useSignal(props.price);
  useContextProvider(PriceContext, HoverPrice);
  return (
    <>
      <div>component context provider {HoverPrice.value}</div>
      <button type="button" onClick$={() => HoverPrice.value++}>
        add One
      </button>
    </>
  );
});
