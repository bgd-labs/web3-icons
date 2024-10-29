// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatalusd } from "../../../icons/mono/build/icon-statalusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatalusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatalusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatalusdIcon.displayName = 'StatalusdIcon';
}

export default StatalusdIcon;