// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatatbtc } from "../../../icons/mono/build/icon-statatbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatatbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatatbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatatbtcIcon.displayName = 'StatatbtcIcon';
}

export default StatatbtcIcon;