import { CreateTagsDto } from "@/server/rfid/dto/createTags.dto";

export interface Methods {
  post: {
    reqData: CreateTagsDto;
    resData: void;
  };
}
