import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useOnWindow,
  useComputed$,
  useOn,
  type Signal,
  type QRL,
} from "@builder.io/qwik";

import {
  carrouselContainer,
  button,
  sectionWrapperCardButtons,
  gridAreaCss,
} from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as card from "./card.css";

type CardProps = {
  Category: string;
  Image: string;
  Gif?: string;
  Price: number;
  Link: string;
  fromParentFunction: QRL<(x: number) => void>;
};

/** MARK: Card
 * @param {CardProps} props - The props for the Card component.
 * @param {string} props.Category - The category of the product.
 * @param {string} props.Image - The URL of the product image.
 * @param {number} props.Price - The price of the product.
 * @param {string} props.Link - The URL link to the product details.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = component$<CardProps>((props) => {
  //const PriceHover = useSignal(0);

  // useTask$( () => {
  //   PriceHover.value = props.Price
  // })
  useOn(
    "mouseenter",
    $(() => {
      // PriceHover.value = props.Price;
      //alert(PriceHover.value);
      props.fromParentFunction(props.Price);
    })
  );
  //useContextProvider(PriceCtx, PriceHover);
  return (
    <section class={card.wrapperCard}>
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div
        class={card.hoverImg}
        style={assignInlineVars(card.imageHoverContract, {
          gif: `url(${props.Gif})` || `url(${props.Image})`,
          image: `url(${props.Image})`,
        })}
      ></div>
      <p class={card.Title}>{props.Category}</p>
      <p class={card.price}>{props.Price}</p>
      <div class={card.Btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0"
          viewBox="0 0 384 512"
        >
          <path
            stroke="none"
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          />
          <title>PLAY</title>
        </svg>
        <span class={card.BtnText}>Voir la Visite</span>
      </div>
    </section>
  );
});

/** MARK: Cards wrapper */
export default component$(() => {
  const wrapperRef = useSignal<HTMLDivElement>();
  const priceHover = useSignal<number>(300);
  const HandlePriceHoverFromChild = $((x: number): void => {
    priceHover.value = x;
  });

  type Wrapper = {
    clientWidth: number;
    scrollLeft: number;
    scrollWidth: number;
  };
  const wrapper = useStore<Wrapper>({
    clientWidth: 500,
    scrollLeft: 0,
    scrollWidth: 3000,
  });
  const buttonState = {
    prev: useComputed$(() => {
      return wrapper.scrollLeft > 8;
    }),
    next: useComputed$(() => {
      return (
        wrapper.scrollLeft + 10 < wrapper.scrollWidth - wrapper.clientWidth
      );
    }),
  };

  /** MARK: FUNCTIONS
   *
   */
  const initSize = $(() => {
    if (!wrapperRef.value) return;
    wrapper.clientWidth = wrapperRef.value.clientWidth;
    wrapper.scrollWidth = wrapperRef.value.scrollWidth;
    wrapper.scrollLeft = wrapperRef.value.scrollLeft;
  });
  const move = $((direction: "LEFT" | "RIGHT") => {
    if (!wrapperRef.value) return;
    initSize();
    const scrollLength =
      direction === "RIGHT" ? wrapper.clientWidth : -wrapper.clientWidth;

    wrapperRef.value.scrollBy({
      left: scrollLength,
      behavior: "smooth",
    });
  });

  /** MARK: Event LISTNER
   *
   */
  useOnWindow("resize", initSize);
  useOnDocument("scrollend", initSize);

  useOn(
    "keydown",
    $((event) => {
      if (event.key === "ArrowRight") {
        move("RIGHT");
      } else if (event.key === "ArrowLeft") {
        move("LEFT");
      }
      return;
    })
  );
  return (
    <>
      <section class={sectionWrapperCardButtons}>
        <div class={gridAreaCss.text}>
          <h2>Éxemple de mes réalisations:</h2>
          <h4>A partir de : {priceHover.value}€</h4>
        </div>
        <button
          type="button"
          class={[
            gridAreaCss.prevButton,
            buttonState.prev.value ? button.available : button.disable,
          ]}
          onClick$={$(() => move("LEFT"))}
        >
          ← Prev
        </button>
        <div class={carrouselContainer} ref={wrapperRef}>
          {Array.from({ length: 6 }, (_, i) => {
            return (
              <Card
                key={`Cards example n°${
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  i
                }`}
                Category={`${i} ${wrapper.scrollLeft} ${wrapper.scrollWidth}`}
                Link="/"
                Price={(i+1)*125}
                Image="/images/image-mobile.avif"
                Gif="/images/giphy.webp"
                fromParentFunction={HandlePriceHoverFromChild}
              />
            );
          }
          
          
          )}
          
        </div>
        <button
          type="button"
          class={[
            gridAreaCss.nextButton,
            buttonState.next.value ? button.available : button.disable,
          ]}
          onClick$={$(() => move("RIGHT"))}
        >
          Next →
        </button>
      </section>
    </>
  );
});
