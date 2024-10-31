// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacrvusd } from "../../../icons/mono/build/icon-statacrvusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatacrvusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatacrvusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacrvusdIcon.displayName = 'StatacrvusdIcon';
}

export default StatacrvusdIcon;