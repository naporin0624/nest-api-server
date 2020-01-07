import { useState, useEffect } from "react";
import { socket } from "@/client/lib/socket";

interface Counter {
  [key: string]: string | number;
}
export const useEnhance = () => {
  const [chair, setChair] = useState<Counter[]>([]);
  const [floor, setFloor] = useState<Counter[]>([]);
  const [border, setBorder] = useState<Counter[]>([]);

  useEffect(() => {
    socket.on("chair_count", (e: Counter[]) => !!e.length && setChair(e));
    socket.on("floor_count", (e: Counter[]) => !!e.length && setFloor(e));
    socket.on("border_count", (e: Counter[]) => !!e.length && setBorder(e));
  });

  return {
    chair,
    chairColors: ["#053a69", "#cd8235", "#de6383", "#c56b0c"],
    floor,
    floorColors: ["#aab7ef", "#4f0f45"],
    border,
    borderColors: ["#aab7ef", "#4f0f45"],
  };
};
