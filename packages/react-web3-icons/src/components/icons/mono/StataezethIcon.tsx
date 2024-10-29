// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataezeth } from "../../../icons/mono/build/icon-stataezeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataezethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataezeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataezethIcon.displayName = 'StataezethIcon';
}

export default StataezethIcon;