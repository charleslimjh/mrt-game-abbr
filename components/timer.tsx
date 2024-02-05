import { useEffect, useState, useRef } from "react";

function useInterval(callback: any, delay: any) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      return callbackRef.current();
    }

    if (delay != null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Timer(props: any) {
  useInterval(
    () => {
      props.callback(props.time - 1);
    },
    props.time <= 0 ? null : 1000
  );

  return (
    <div>
      <h1>Time left: {props.time < 0 ? 0 : props.time}</h1>
    </div>
  );
}
