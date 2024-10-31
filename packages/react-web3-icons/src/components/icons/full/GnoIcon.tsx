// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGno } from "../../../icons/full/build/icon-gno.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GnoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGno.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GnoIcon.displayName = 'GnoIcon';
}

export default GnoIcon;