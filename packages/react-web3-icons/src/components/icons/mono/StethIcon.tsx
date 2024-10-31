// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSteth } from "../../../icons/mono/build/icon-steth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StethIcon.displayName = 'StethIcon';
}

export default StethIcon;