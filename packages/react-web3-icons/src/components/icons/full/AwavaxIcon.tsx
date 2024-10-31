// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwavax } from "../../../icons/full/build/icon-awavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwavaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwavaxIcon.displayName = 'AwavaxIcon';
}

export default AwavaxIcon;