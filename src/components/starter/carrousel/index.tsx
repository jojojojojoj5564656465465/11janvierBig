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
  useStylesScoped$,
} from "@builder.io/qwik";

import {
  carrouselContainer,
  button,
  sectionWrapperCardButtons,
  gridAreaCss,
  spanAbsolutePriceHover,
  mainSectionRelative,
} from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as card from "./card.css";
import list from "./data";

import "@styles/utils/reset.css?inline";
//import './test.css?inline'

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
  useOn(
    "mouseover",
    $(() => {
      props.fromParentFunction(props.Price);
    })
  );

  return (
    <section class={card.wrapperCard}>
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div
        class={card.hoverImg}
        style={assignInlineVars(card.imageHoverContract, {
          gif: `url(${props.Gif})` || `url(${props.Image})`,
          image: `url(${props.Image})` || `url(${props.Gif})`,
        })}
      ></div>
      <p class={card.Title}>{props.Category}</p>
      <p class={card.price}>{props.Price}</p>
      <a href={props.Link}>
        <div class={card.buttonBlue}>
          <span class={card.buttonBlue_Text}>Voir la Visite</span>
        </div>
      </a>
    </section>
  );
});

/** MARK: Cards wrapper */
export default component$(() => {
  const wrapperRef = useSignal<HTMLDivElement>();
  const priceHover = useSignal<number>(450);
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
      <section class={mainSectionRelative}>
        <section class={sectionWrapperCardButtons}>
          <div class={gridAreaCss.text}>
            <h2>Éxemple de mes réalisations : </h2>
          </div>
          <button
            type="button"
            class={[
              gridAreaCss.prevButton,
              buttonState.prev.value ? button.available : button.disable,
            ]}
            onClick$={$(() => move("LEFT"))}
          />
          <div class={carrouselContainer} ref={wrapperRef}>
            {list.map((el, i) => {
              return (
                <Card
                  key={`Cards example n°${i}`}
                  Category={el.Category}
                  Link={el.Link}
                  Price={el.Price}
                  Image={el.Image}
                  Gif={el.Gif}
                  fromParentFunction={HandlePriceHoverFromChild}
                />
              );
            })}
          </div>

          <button
            type="button"
            class={[
              gridAreaCss.nextButton,
              buttonState.next.value ? button.available : button.disable,
            ]}
            onClick$={$(() => move("RIGHT"))}
          />
        </section>
        <span class={spanAbsolutePriceHover}>{priceHover.value}€</span>
      </section>
    </>
  );
});
