// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconXdai } from "../../../icons/full/build/icon-xdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const XdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconXdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  XdaiIcon.displayName = 'XdaiIcon';
}

export default XdaiIcon;