// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacake } from "../../../icons/mono/build/icon-statacake.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatacakeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatacake.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacakeIcon.displayName = 'StatacakeIcon';
}

export default StatacakeIcon;