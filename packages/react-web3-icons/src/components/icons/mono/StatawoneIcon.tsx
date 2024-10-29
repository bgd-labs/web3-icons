// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawone } from "../../../icons/mono/build/icon-statawone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawoneIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatawone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawoneIcon.displayName = 'StatawoneIcon';
}

export default StatawoneIcon;