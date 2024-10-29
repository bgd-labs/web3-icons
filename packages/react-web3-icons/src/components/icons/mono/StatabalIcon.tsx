// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatabal } from "../../../icons/mono/build/icon-statabal.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatabalIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatabal.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatabalIcon.displayName = 'StatabalIcon';
}

export default StatabalIcon;