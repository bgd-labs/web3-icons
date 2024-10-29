// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSfrxeth } from "../../../icons/full/build/icon-sfrxeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SfrxethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSfrxeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SfrxethIcon.displayName = 'SfrxethIcon';
}

export default SfrxethIcon;