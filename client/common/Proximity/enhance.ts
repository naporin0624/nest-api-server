import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import { TagContainerJoinTagInfoForLab } from "@/types";
import { Props } from ".";

export const useEnhance = (props: Props) => {
  const { container, filterNames } = props;
  const proximity = useCallback(
    (containers: TagContainerJoinTagInfoForLab[], filter: string) => {
      return containers
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        )
        .map(
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

  const movementData = useMemo(
    () =>
      filterNames.map(n => ({
        name: n,
        value: proximity(container, n)
          .filter(a => a)
          .map(d => ({
            ...d,
            createdAt: format(new Date(d.createdAt), "HH:mm:ss"),
          })),
      })),
    [container],
  );

  return { movementData };
};
