// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAcbbtc } from "../../../icons/mono/build/icon-acbbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AcbbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAcbbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AcbbtcIcon.displayName = 'AcbbtcIcon';
}

export default AcbbtcIcon;