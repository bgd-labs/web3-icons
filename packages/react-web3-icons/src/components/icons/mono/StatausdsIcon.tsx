// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausds } from "../../../icons/mono/build/icon-statausds.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatausdsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatausds.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdsIcon.displayName = 'StatausdsIcon';
}

export default StatausdsIcon;