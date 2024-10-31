// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasnx } from "../../../icons/mono/build/icon-statasnx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatasnxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatasnx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasnxIcon.displayName = 'StatasnxIcon';
}

export default StatasnxIcon;