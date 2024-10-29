// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSnx } from "../../../icons/mono/build/icon-snx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SnxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSnx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SnxIcon.displayName = 'SnxIcon';
}

export default SnxIcon;