// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawsteth } from "../../../icons/full/build/icon-statawsteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawstethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatawsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawstethIcon.displayName = 'StatawstethIcon';
}

export default StatawstethIcon;