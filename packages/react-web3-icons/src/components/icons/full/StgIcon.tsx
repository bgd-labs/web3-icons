// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStg } from "../../../icons/full/build/icon-stg.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StgIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStg.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StgIcon.displayName = 'StgIcon';
}

export default StgIcon;