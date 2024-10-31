// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatauni } from "../../../icons/mono/build/icon-statauni.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatauniIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatauni.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatauniIcon.displayName = 'StatauniIcon';
}

export default StatauniIcon;