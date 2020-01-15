import { TagInfoDto } from "@/server/tag-info/dto/tagInfo.dto";
import { TagInfo } from "@/server/entities";

export interface Methods {
  post: {
    reqData: TagInfoDto;
    resData: TagInfo;
  };
}
