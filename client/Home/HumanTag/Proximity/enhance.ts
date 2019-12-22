import { useCallback, useMemo } from "react";
import { zip } from "@/client/utils/index";
import { format } from "date-fns";
import { TagContainerJoinTagInfoForLab } from "@/types";

export const useEnhance = (humanData: TagContainerJoinTagInfoForLab[]) => {
  const proximity = useCallback(
    (containers: TagContainerJoinTagInfoForLab[], filter: string) => {
      return containers.map(
        c =>
          c.tags
            .filter(t => t.tagInfoForLab.name === filter)
            .map(t => ({
              antennaNo: t.antennaNo,
              createdAt: c.createdAt,
              r: t.rssi,
            }))
            .sort((a, b) => b.r - a.r)[0],
      );
    },
    [],
  );

  const humanMovementData = useMemo(
    () =>
      zip(
        ["NameTag1", "NameTag2", "NameTag3", "NameTag4"].map(n =>
          proximity(humanData, n),
        ),
      ).map(a => ({
        NameTag1: (a[0] && a[0].antennaNo) || 0,
        NameTag2: (a[1] && a[1].antennaNo) || 0,
        NameTag3: (a[2] && a[2].antennaNo) || 0,
        NameTag4: (a[3] && a[3].antennaNo) || 0,
        name: format(
          new Date(
            (a[0] && a[0].createdAt) ||
              (a[1] && a[1].createdAt) ||
              (a[2] && a[2].createdAt) ||
              (a[3] && a[3].createdAt),
          ),
          "HH:mm:ss",
        ),
      })),
    [humanData],
  );

  return { humanMovementData };
};
