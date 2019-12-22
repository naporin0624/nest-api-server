import { useState, useEffect } from "react";
import { api } from "@/client/lib/axios";
import { TagContainerJoinTagInfoForLab } from "@/types";
export const useEnhance = () => {
  const [humanData, setHumanData] = useState<TagContainerJoinTagInfoForLab[]>(
    [],
  );
  useEffect(() => {
    setInterval(async () => {
      const res = await api.get<TagContainerJoinTagInfoForLab[]>(
        "/api/experiment/v1/human_data",
      );
      setHumanData(res.data);
    }, 1000 * 30 * 1);
  }, []);

  return { humanData };
};
