// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCbbtc } from "../../../icons/mono/build/icon-cbbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CbbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCbbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CbbtcIcon.displayName = 'CbbtcIcon';
}

export default CbbtcIcon;