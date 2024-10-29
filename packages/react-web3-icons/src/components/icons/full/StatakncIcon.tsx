// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataknc } from "../../../icons/full/build/icon-stataknc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatakncIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataknc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatakncIcon.displayName = 'StatakncIcon';
}

export default StatakncIcon;