// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAave } from "../../../icons/mono/build/icon-aave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AaveIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AaveIcon.displayName = 'AaveIcon';
}

export default AaveIcon;