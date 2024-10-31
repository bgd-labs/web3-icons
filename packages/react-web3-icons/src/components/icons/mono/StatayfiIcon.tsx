// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatayfi } from "../../../icons/mono/build/icon-statayfi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatayfiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatayfi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatayfiIcon.displayName = 'StatayfiIcon';
}

export default StatayfiIcon;