// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRen } from "../../../icons/full/build/icon-ren.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RenIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconRen.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RenIcon.displayName = 'RenIcon';
}

export default RenIcon;