import { $, component$, type QRL, useStore } from "@builder.io/qwik";
import css from "./index.css";

export const grandParent = component$(() => {
  const dataStore = useStore({ message: "Default" });

  const handleDataFromChild = $((data: string) => {
    dataStore.message = data;
  });
  return (
    <div>
      <h1>data received from child : {dataStore.message}</h1>
      <button type="button" onClick$={() => handleDataFromChild("FUCK YOU")}>
        FUCK YOU
      </button>
      <Parent onReceiveData={handleDataFromChild} />
    </div>
  );
});

interface ParentProps {
  onReceiveData: QRL<(data: string) => void>;
}

export const Parent = component$(({ onReceiveData }: ParentProps) => {
  return (
    <section class={css.parent}>
      <h2>Parent component</h2>
      <Child sendDataToGrandParent={$(() => onReceiveData("1"))} />
      <Child sendDataToGrandParent={$(() => onReceiveData("2"))} />
      <Child sendDataToGrandParent={$(() => onReceiveData("3"))} />
    </section>
  );
});

interface ChildProps {
  sendDataToGrandParent: QRL<(data: string) => void>;
}

export const Child = component$(({ sendDataToGrandParent }: ChildProps) => {
  const sendData = $((X: string) => {
    return sendDataToGrandParent(X);
  });
  return (
    <div class={css.child}>
      <button type="button" onClick$={() => sendData("default message")}>
        Send
      </button>
    </div>
  );
});
