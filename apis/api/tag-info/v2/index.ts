import { TagInfoForLab } from "@/server/entities";
import { TagInfoForLabDto } from "@/server/tag-info/dto/tagInfoForLab.dto";

export interface Methods {
  get: {
    resData: TagInfoForLab[];
  };
  post: {
    reqData: TagInfoForLabDto;
    resData: TagInfoForLab;
  };
}
