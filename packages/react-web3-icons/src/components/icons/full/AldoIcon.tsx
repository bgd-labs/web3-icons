// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAldo } from "../../../icons/full/build/icon-aldo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AldoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAldo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AldoIcon.displayName = 'AldoIcon';
}

export default AldoIcon;