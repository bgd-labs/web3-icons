// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawavax } from "../../../icons/full/build/icon-statawavax.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawavaxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatawavax.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawavaxIcon.displayName = 'StatawavaxIcon';
}

export default StatawavaxIcon;