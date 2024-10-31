// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabtc } from "../../../icons/mono/build/icon-statabtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatabtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatabtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabtcIcon.displayName = 'StatabtcIcon';
}

export default StatabtcIcon;