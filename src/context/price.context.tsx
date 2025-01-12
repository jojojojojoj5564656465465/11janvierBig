import type { Signal } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

type PriceContext = number;
export default createContextId<Signal<PriceContext>>("price.hover-context");
