// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconYfi } from "../../../icons/mono/build/icon-yfi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const YfiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconYfi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  YfiIcon.displayName = 'YfiIcon';
}

export default YfiIcon;