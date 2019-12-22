import { useState, useEffect } from "react";
import { TagContainerJoinTagInfoForLab } from "@/types";
import { socket } from "@/client/lib/socket";
export const useEnhance = () => {
  const [humanData, setHumanData] = useState<TagContainerJoinTagInfoForLab[]>(
    [],
  );
  const [wearData, setWearData] = useState<TagContainerJoinTagInfoForLab[]>([]);
  const [wheelChairData, setWheelchairData] = useState<
    TagContainerJoinTagInfoForLab[]
  >([]);
  const [slipperData, setSlipperData] = useState<
    TagContainerJoinTagInfoForLab[]
  >([]);

  useEffect(() => {
    socket.on("human_read_result", (e: TagContainerJoinTagInfoForLab[]) =>
      setHumanData(e),
    );
    socket.on("wheel_chair_read_result", (e: TagContainerJoinTagInfoForLab[]) =>
      setWheelchairData(e),
    );
    socket.on("slipper_read_result", (e: TagContainerJoinTagInfoForLab[]) =>
      setSlipperData(e),
    );
    socket.on("wear_read_result", (e: TagContainerJoinTagInfoForLab[]) =>
      setWearData(e),
    );
  });

  return { humanData, wheelChairData, slipperData, wearData };
};
