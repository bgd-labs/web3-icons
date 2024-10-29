// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataust } from "../../../icons/full/build/icon-stataust.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataustIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataust.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataustIcon.displayName = 'StataustIcon';
}

export default StataustIcon;