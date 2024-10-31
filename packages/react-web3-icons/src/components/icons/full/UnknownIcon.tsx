// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUnknown } from "../../../icons/full/build/icon-unknown.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UnknownIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUnknown.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UnknownIcon.displayName = 'UnknownIcon';
}

export default UnknownIcon;