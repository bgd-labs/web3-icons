// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwbtc } from "../../../icons/full/build/icon-awbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwbtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwbtcIcon.displayName = 'AwbtcIcon';
}

export default AwbtcIcon;