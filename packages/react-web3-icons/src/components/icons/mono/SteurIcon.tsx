// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSteur } from "../../../icons/mono/build/icon-steur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SteurIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSteur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SteurIcon.displayName = 'SteurIcon';
}

export default SteurIcon;