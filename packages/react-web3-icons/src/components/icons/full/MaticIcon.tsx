// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMatic } from "../../../icons/full/build/icon-matic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const MaticIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconMatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MaticIcon.displayName = 'MaticIcon';
}

export default MaticIcon;