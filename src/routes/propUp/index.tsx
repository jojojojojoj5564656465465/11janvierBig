import { component$ } from "@builder.io/qwik";
import { r, s, second, variant } from "./index.css";
import Image from "./public/images/carrousel/images/spa.webp?&jsx";

export default component$(() => {
  return (
    <>
      <h2>hello world</h2>
      <section class={s}>
        <div class={variant.primary} />
        <div class={second} />
      </section>

      <section class={r}>
        <div>d</div>
        <div>ds</div>
        <div>q</div>
        <div>fds</div>
        <div>fds</div>
        <div>
          <h5>hello</h5>
        </div>
      </section>
    </>
  );
});
