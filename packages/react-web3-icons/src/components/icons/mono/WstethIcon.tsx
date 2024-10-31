// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWsteth } from "../../../icons/mono/build/icon-wsteth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WstethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWsteth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WstethIcon.displayName = 'WstethIcon';
}

export default WstethIcon;