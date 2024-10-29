// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatalend } from "../../../icons/mono/build/icon-statalend.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatalendIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatalend.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatalendIcon.displayName = 'StatalendIcon';
}

export default StatalendIcon;