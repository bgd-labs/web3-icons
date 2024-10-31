// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwbtc } from "../../../icons/mono/build/icon-awbtc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwbtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwbtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwbtcIcon.displayName = 'AwbtcIcon';
}

export default AwbtcIcon;