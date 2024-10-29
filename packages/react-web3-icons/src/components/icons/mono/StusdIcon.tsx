// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStusd } from "../../../icons/mono/build/icon-stusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StusdIcon.displayName = 'StusdIcon';
}

export default StusdIcon;