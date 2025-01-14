// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkcbeth } from "../../../icons/mono/build/icon-stkcbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkcbethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkcbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkcbethIcon.displayName = 'StkcbethIcon';
}

export default StkcbethIcon;