// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataens } from "../../../icons/mono/build/icon-stataens.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataensIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataens.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataensIcon.displayName = 'StataensIcon';
}

export default StataensIcon;