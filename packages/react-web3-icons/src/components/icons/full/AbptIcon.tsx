// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbpt } from "../../../icons/full/build/icon-abpt.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AbptIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAbpt.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbptIcon.displayName = 'AbptIcon';
}

export default AbptIcon;