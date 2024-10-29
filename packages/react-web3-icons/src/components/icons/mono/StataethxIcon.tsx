// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataethx } from "../../../icons/mono/build/icon-stataethx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataethxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataethx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataethxIcon.displayName = 'StataethxIcon';
}

export default StataethxIcon;