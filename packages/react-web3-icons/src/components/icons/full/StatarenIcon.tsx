// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataren } from "../../../icons/full/build/icon-stataren.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatarenIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataren.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatarenIcon.displayName = 'StatarenIcon';
}

export default StatarenIcon;