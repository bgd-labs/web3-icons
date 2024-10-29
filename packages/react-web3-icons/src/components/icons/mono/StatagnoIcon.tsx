// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatagno } from "../../../icons/mono/build/icon-statagno.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatagnoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatagno.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatagnoIcon.displayName = 'StatagnoIcon';
}

export default StatagnoIcon;