// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWbeth } from "../../../icons/mono/build/icon-wbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WbethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WbethIcon.displayName = 'WbethIcon';
}

export default WbethIcon;