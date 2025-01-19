import { component$ } from "@builder.io/qwik";
import { s, variant } from "./index.css";
import Image from "./public/images/carrousel/images/spa.webp?&jsx";

export default component$(() => {
  return (
    <>
      <h2>hello world</h2>
      <section class={s}>
        <div class={variant.primary}/>
        <div class={variant.ternary}/>
      </section>
    </>
  );
});
