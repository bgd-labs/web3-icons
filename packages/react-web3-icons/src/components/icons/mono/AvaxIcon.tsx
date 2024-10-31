// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAvax } from "../../../icons/mono/build/icon-avax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AvaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAvax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AvaxIcon.displayName = 'AvaxIcon';
}

export default AvaxIcon;