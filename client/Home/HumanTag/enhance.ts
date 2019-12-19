import { useState, useEffect } from "react";
import { TagContainer } from "@/server/entities";
import { api } from "@/client/lib/axios";
export const useEnhance = () => {
  const [humanData, setHumanData] = useState<TagContainer[]>([]);
  useEffect(() => {
    setInterval(async () => {
      const res = await api.get<TagContainer[]>(
        "/api/experiment/v1/human_data",
      );
      setHumanData(res.data);
    }, 1000 * 30 * 1);
  }, []);

  return { humanData };
};
