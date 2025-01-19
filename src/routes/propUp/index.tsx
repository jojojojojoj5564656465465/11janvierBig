import { component$ } from "@builder.io/qwik";
import {s} from "./index.css"
import Image from "./public/images/carrousel/images/spa.webp?&jsx";

export default component$(() => {
  return (
      <>
      <h2>hello world</h2>
    <div class={s}>
      <Image/>
      <h5>h5 mon ami</h5>
      <h6>h5 mon ami</h6>
      <p>p mon ami</p>
    </div>
      </>
  );
});
