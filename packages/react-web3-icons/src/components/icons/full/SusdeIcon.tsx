// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSusde } from "../../../icons/full/build/icon-susde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SusdeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSusde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SusdeIcon.displayName = 'SusdeIcon';
}

export default SusdeIcon;