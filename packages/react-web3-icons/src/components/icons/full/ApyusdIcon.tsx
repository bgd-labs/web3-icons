// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconApyusd } from "../../../icons/full/build/icon-apyusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ApyusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconApyusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ApyusdIcon.displayName = 'ApyusdIcon';
}

export default ApyusdIcon;