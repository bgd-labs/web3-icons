// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconArb } from "../../../icons/mono/build/icon-arb.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArbIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconArb.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArbIcon.displayName = 'ArbIcon';
}

export default ArbIcon;