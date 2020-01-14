import { useState, useEffect, useRef, useCallback } from "react";
import { socket } from "@/client/lib/socket";
import { TagInfoForLab, TagContainer } from "@/server/entities";
import { TagContainerJoinTagInfoForLab, TagJoinTagInfoForLab } from "@/types";
import axios from "axios";
import { unique, valueCounter } from "@/client/utils/";
import { Observable } from "rx";
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

interface Counter {
  [key: string]: string | number;
}
export const useEnhance = () => {
  const tagInfoList = useRef<TagInfoForLab[] | undefined | null>();
  const [tagContainerList, setTagContainerList] = useState<
    Required<TagContainerJoinTagInfoForLab[]>
  >([]);

  useEffect(() => {
    axios
      .get("/api/tag-info/v2")
      .then(res => (tagInfoList.current = res.data as TagInfoForLab[]));

    fromEvent(socket, "add_tags")
      .pipe(throttleTime(1000))
      .subscribe((tagContainer: Required<TagContainer>) => {
        const tags = tagContainer.tags
          .map<TagJoinTagInfoForLab>(tag => ({
            ...tag,
            tagInfoForLab: (tagInfoList.current || []).filter(
              tagInfo => tagInfo.epc === tag.tagId,
            )[0],
          }))
          .filter(tag => tag.tagInfoForLab);

        setTagContainerList(tC =>
          [...tC, { ...tagContainer, tags }].filter(l => {
            const sub = new Date().getTime() - new Date(l.readTime).getTime();
            return sub < 30 * 1000;
          }),
        );
      });
  }, []);

  const createCounterProps = useCallback(
    (name: string): Counter[] => {
      const tags = tagContainerList.map<TagJoinTagInfoForLab[]>(c =>
        c.tags.filter(tag => tag.tagInfoForLab.name.includes(name)),
      );
      if (tags.length == 0) return [];

      const tPick = tags
        .reduce((a, b) => [...a, ...b])
        .map(tag => ({
          antennaNo: tag.antennaNo,
          name: tag.tagInfoForLab.name,
        }));
      const antennaList = unique(tPick.map(t => t.antennaNo)).sort();
      return antennaList.map(a => ({
        name: `antenna${a}`,
        ...valueCounter(tPick.filter(t => t.antennaNo === a).map(t => t.name)),
      }));
    },
    [tagContainerList],
  );

  return {
    chair: createCounterProps("Chair"),
    chairColors: ["#053a69", "#cd8235", "#de6383", "#c56b0c"],
    floor: createCounterProps("Floor"),
    floorColors: ["#aab7ef", "#4f0f45"],
    border: createCounterProps("Border"),
    borderColors: ["#aab7ef", "#4f0f45"],
  };
};
