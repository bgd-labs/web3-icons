// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbtc } from "../../../icons/full/build/icon-abtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbtcIcon.displayName = 'AbtcIcon';
}

export default AbtcIcon;