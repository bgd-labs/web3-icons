// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCake } from "../../../icons/full/build/icon-cake.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CakeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCake.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CakeIcon.displayName = 'CakeIcon';
}

export default CakeIcon;