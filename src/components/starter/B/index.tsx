import { $, component$, type QRL, useStore } from "@builder.io/qwik";
import css from "./index.css"


export const grandParent = component$(() => {
  const dataStore = useStore({ message: "Default" });

  const handleDataFromChild = $((data: string) => {
    dataStore.message = data;
  });
  return (
    <div>
      <h1>data received from child : {dataStore.message}</h1>
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
      <Child sendDataToGrandParent={onReceiveData} />
      <Child sendDataToGrandParent={onReceiveData} />
      <Child sendDataToGrandParent={onReceiveData} />
    </section>
  );
});

interface ChildProps {
  sendDataToGrandParent: QRL<(data: string) => void>;
}

export const Child = component$(({ sendDataToGrandParent }: ChildProps) => {
  const sendData = $(() => {
    sendDataToGrandParent("i am child (Qwik)!");
  });
  return (
    <div class={css.child}>
    <button type="button" onClick$={sendData}>
      Send
    </button>
      </div>
  );
});
