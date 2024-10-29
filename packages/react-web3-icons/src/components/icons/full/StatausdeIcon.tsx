// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausde } from "../../../icons/full/build/icon-statausde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatausdeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatausde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdeIcon.displayName = 'StatausdeIcon';
}

export default StatausdeIcon;