// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUsde } from "../../../icons/full/build/icon-usde.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UsdeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUsde.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdeIcon.displayName = 'UsdeIcon';
}

export default UsdeIcon;