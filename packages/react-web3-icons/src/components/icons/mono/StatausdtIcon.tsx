// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdt } from "../../../icons/mono/build/icon-statausdt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatausdtIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatausdt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdtIcon.displayName = 'StatausdtIcon';
}

export default StatausdtIcon;