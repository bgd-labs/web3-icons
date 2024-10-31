// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLusd } from "../../../icons/mono/build/icon-lusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LusdIcon.displayName = 'LusdIcon';
}

export default LusdIcon;