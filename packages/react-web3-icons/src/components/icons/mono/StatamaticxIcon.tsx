// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamaticx } from "../../../icons/mono/build/icon-statamaticx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatamaticxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatamaticx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamaticxIcon.displayName = 'StatamaticxIcon';
}

export default StatamaticxIcon;