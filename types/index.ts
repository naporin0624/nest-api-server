import { Tag, TagContainer, TagInfoForLab } from "@/server/entities";

export interface TagJoinTagInfoForLab extends Tag {
  tagInfoForLab: TagInfoForLab;
}

export interface TagContainerJoinTagInfoForLab extends TagContainer {
  tags: TagJoinTagInfoForLab[];
}
