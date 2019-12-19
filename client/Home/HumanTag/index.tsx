import React, { Fragment } from "react";
import { useEnhance } from "./enhance";
import { Proximity } from "./Proximity/index";

export const HumanTag: React.FC = () => {
  const { humanData } = useEnhance();

  return (
    <Fragment>
      <Proximity container={humanData} />
    </Fragment>
  );
};
