// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStklink } from "../../../icons/full/build/icon-stklink.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StklinkIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStklink.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StklinkIcon.displayName = 'StklinkIcon';
}

export default StklinkIcon;