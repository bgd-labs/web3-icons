// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAtbtc } from "../../../icons/full/build/icon-atbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AtbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAtbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtbtcIcon.displayName = 'AtbtcIcon';
}

export default AtbtcIcon;