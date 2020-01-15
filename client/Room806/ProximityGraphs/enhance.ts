import { useState, useEffect, useRef, useCallback } from "react";
import { TagJoinTagInfoForLab, TagContainerJoinTagInfoForLab } from "@/types";
import { socket } from "@/client/lib/socket";
import { TagContainer, TagInfoForLab } from "@/server/entities";
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";
import { client } from "@/client/lib/axios";

export const useEnhance = () => {
  const tagInfoList = useRef<TagInfoForLab[] | undefined | null>();
  const [tagContainerList, setTagContainerList] = useState<
    Required<TagContainerJoinTagInfoForLab[]>
  >([]);

  useEffect(() => {
    client.api.tag_info.v2.$get().then(res => (tagInfoList.current = res));

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

  const createPromixityProps = useCallback(
    (name: string): TagContainerJoinTagInfoForLab[] =>
      tagContainerList.map(c => {
        const tags = c.tags.filter(tag =>
          tag.tagInfoForLab.name.includes(name),
        );
        return { ...c, tags };
      }),
    [tagContainerList],
  );

  const humanData = createPromixityProps("NameTag");
  const wheelChairData = createPromixityProps("Wheelchair");
  const slipperData = createPromixityProps("Slipper");
  const wearData = createPromixityProps("Waer");

  return {
    humanData,
    wheelChairData,
    slipperData,
    wearData,
  };
};
