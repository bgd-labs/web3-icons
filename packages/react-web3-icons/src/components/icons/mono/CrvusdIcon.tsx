// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCrvusd } from "../../../icons/mono/build/icon-crvusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CrvusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCrvusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CrvusdIcon.displayName = 'CrvusdIcon';
}

export default CrvusdIcon;