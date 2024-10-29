// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAop } from "../../../icons/full/build/icon-aop.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AopIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAop.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AopIcon.displayName = 'AopIcon';
}

export default AopIcon;