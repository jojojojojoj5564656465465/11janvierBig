import {
  component$,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { PriceContext } from "@/context/price.context";

interface props {
  price: number;
}
const UseCtxProvider = component$((props: props) => {
  const HoverPrice = useSignal(props.price);
  useContextProvider(PriceContext, HoverPrice);
  const theme = useContext(PriceContext);
  return (
    <>
      <div>component context provider {HoverPrice.value}</div>
      <button type="button" onClick$={() => HoverPrice.value++}>
        add One
      </button>
      <div>Theme is {theme.value}</div>
    </>
  );
});

export default component$(() => {
  return (
    <>
      <UseCtxProvider price={500} />
    </>
  );
});
