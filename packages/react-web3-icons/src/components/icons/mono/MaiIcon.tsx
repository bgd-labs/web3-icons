// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMai } from "../../../icons/mono/build/icon-mai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const MaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconMai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MaiIcon.displayName = 'MaiIcon';
}

export default MaiIcon;