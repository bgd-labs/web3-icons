// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbat } from "../../../icons/full/build/icon-abat.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AbatIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAbat.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbatIcon.displayName = 'AbatIcon';
}

export default AbatIcon;