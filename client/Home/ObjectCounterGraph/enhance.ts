import { useState, useEffect, useMemo, useCallback } from "react";
import { api } from "@/client/lib/axios";

interface Counter {
  [key: string]: string | number;
}
export const useEnhance = () => {
  const [objCount, setObjCount] = useState(0);
  const [counter, setCounter] = useState<Counter[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const barNames = useMemo(() => {
    const { name, ...bar } = !!counter.length ? counter[0] : { name: "" };
    return Object.keys(bar);
  }, [counter]);

  const randomColor = useCallback(() => {
    const random = ((Math.random() * 0xffffff) | 0).toString(16);
    return "#" + ("000000" + random).slice(-6);
  }, []);

  useEffect(() => {
    setInterval(async () => {
      const res = await api.get<Counter[]>("/api/experiment/v1/object_count");
      !!res.data.length && setCounter(res.data);
    }, 2000);
  }, []);

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
