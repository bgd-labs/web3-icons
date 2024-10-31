// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataop } from "../../../icons/mono/build/icon-stataop.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataopIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataop.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataopIcon.displayName = 'StataopIcon';
}

export default StataopIcon;