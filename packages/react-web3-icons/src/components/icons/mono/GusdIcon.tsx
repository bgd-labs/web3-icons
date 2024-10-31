// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGusd } from "../../../icons/mono/build/icon-gusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GusdIcon.displayName = 'GusdIcon';
}

export default GusdIcon;