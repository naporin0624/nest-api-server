import { useState, useEffect, useMemo, useCallback } from "react";
import { socket } from "@/client/lib/socket";

interface Counter {
  [key: string]: string | number;
}
export const useEnhance = () => {
  const [objCount, setObjCount] = useState(0);
  const [counter, setCounter] = useState<Counter[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const barNames = useMemo(() => {
    const { name, ...bar } = counter.length ? counter[0] : { name: "" };
    return Object.keys(bar);
  }, [counter]);

  const randomColor = useCallback(() => {
    const random = ((Math.random() * 0xffffff) | 0).toString(16);
    return "#" + ("000000" + random).slice(-6);
  }, []);

  useEffect(() => {
    socket.on("object_count", (e: Counter[]) => !!e.length && setCounter(e));
  });

  useEffect(() => setObjCount(barNames.length), [barNames]);
  useEffect(() => {
    if (colors.length !== objCount) {
      let c = [];
      for (let i = 0; i < objCount; i++) c.push(randomColor());
      setColors(c);
    }
  }, [objCount]);

  return { counter, barNames, colors };
};
