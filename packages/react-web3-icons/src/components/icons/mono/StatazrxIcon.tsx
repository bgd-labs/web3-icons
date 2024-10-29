// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatazrx } from "../../../icons/mono/build/icon-statazrx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatazrxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatazrx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatazrxIcon.displayName = 'StatazrxIcon';
}

export default StatazrxIcon;