// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTbtc } from "../../../icons/full/build/icon-tbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const TbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconTbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TbtcIcon.displayName = 'TbtcIcon';
}

export default TbtcIcon;