// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWmatic } from "../../../icons/mono/build/icon-wmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WmaticIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WmaticIcon.displayName = 'WmaticIcon';
}

export default WmaticIcon;