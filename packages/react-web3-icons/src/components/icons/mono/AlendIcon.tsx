// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAlend } from "../../../icons/mono/build/icon-alend.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AlendIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAlend.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlendIcon.displayName = 'AlendIcon';
}

export default AlendIcon;