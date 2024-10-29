// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacvx } from "../../../icons/full/build/icon-statacvx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatacvxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatacvx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacvxIcon.displayName = 'StatacvxIcon';
}

export default StatacvxIcon;