import { TagInfoForLab } from "@/server/entities";

export interface Methods {
  get: {
    query: {
      environment: string;
    };
    resData: TagInfoForLab[];
  };
}
