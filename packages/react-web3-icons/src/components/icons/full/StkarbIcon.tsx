// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkarb } from "../../../icons/full/build/icon-stkarb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkarbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkarb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkarbIcon.displayName = 'StkarbIcon';
}

export default StkarbIcon;