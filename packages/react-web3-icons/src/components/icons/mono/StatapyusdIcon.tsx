// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatapyusd } from "../../../icons/mono/build/icon-statapyusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatapyusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatapyusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatapyusdIcon.displayName = 'StatapyusdIcon';
}

export default StatapyusdIcon;