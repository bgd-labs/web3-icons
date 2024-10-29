// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMaticx } from "../../../icons/mono/build/icon-maticx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const MaticxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconMaticx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MaticxIcon.displayName = 'MaticxIcon';
}

export default MaticxIcon;