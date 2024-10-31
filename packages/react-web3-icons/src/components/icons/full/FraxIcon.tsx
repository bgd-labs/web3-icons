// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFrax } from "../../../icons/full/build/icon-frax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FraxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFrax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FraxIcon.displayName = 'FraxIcon';
}

export default FraxIcon;