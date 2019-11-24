import * as React from "react";
import { socket } from "../lib/socket";
import { TagContainer } from "../types/";
import { format, addHours } from "date-fns";

export interface ReadCountGraphSchema {
  name: string;
  antenna1: number;
  antenna2: number;
  antenna3: number;
  antenna4: number;
  antenna5: number;
}

type EventPayload = Omit<Omit<TagContainer, "createdAt">, "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export const useEnhance = () => {
  const [tagContainer, setTagContainer] = React.useState<TagContainer[]>([]);
  const [readCountEachAntenna, setReadCountEachAntenna] = React.useState<
    ReadCountGraphSchema[]
  >([]);

  socket.on("connect", () => console.log("Connect"));

  const addTagContainer = (c: TagContainer) => setTagContainer(p => [...p, c]);

  React.useEffect(() => {
    socket.on("add_tags", (eventPayload: EventPayload) => {
      setTagContainer(p => [
        ...p,
        {
          ...eventPayload,
          createdAt: addHours(new Date(eventPayload.createdAt), 9),
          updatedAt: new Date(eventPayload.updatedAt),
        },
      ]);
    });
  }, []);

  React.useEffect(() => {
    const plotLength = tagContainer.length - 10;
    const relu = (n: number) => (n > 0 ? n : 0);
    const readCount = tagContainer
      .slice(relu(plotLength))
      .map<ReadCountGraphSchema>(container => ({
        name: format(container.createdAt, "HH:mm:ss"),
        antenna1: container.tags.filter(tag => tag.antennaNo === 1).length,
        antenna2: container.tags.filter(tag => tag.antennaNo === 2).length,
        antenna3: container.tags.filter(tag => tag.antennaNo === 3).length,
        antenna4: container.tags.filter(tag => tag.antennaNo === 4).length,
        antenna5: container.tags.filter(tag => tag.antennaNo === 5).length,
      }));
    setReadCountEachAntenna(readCount);
  }, [tagContainer]);

  const lineChartNames = [
    { n: 1, c: "#b0c4de" },
    { n: 2, c: "#00fa9a" },
    { n: 3, c: "#778899" },
    { n: 4, c: "#ffa500" },
    { n: 5, c: "#87cefa" },
  ];

  return { tagContainer, lineChartNames, readCountEachAntenna };
};
