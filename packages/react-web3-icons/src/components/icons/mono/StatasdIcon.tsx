// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasd } from "../../../icons/mono/build/icon-statasd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatasdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatasd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasdIcon.displayName = 'StatasdIcon';
}

export default StatasdIcon;