// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataaave } from "../../../icons/mono/build/icon-stataaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataaaveIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataaaveIcon.displayName = 'StataaaveIcon';
}

export default StataaaveIcon;