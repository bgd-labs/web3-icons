// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkusdc } from "../../../icons/full/build/icon-stkusdc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkusdcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkusdc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkusdcIcon.displayName = 'StkusdcIcon';
}

export default StkusdcIcon;