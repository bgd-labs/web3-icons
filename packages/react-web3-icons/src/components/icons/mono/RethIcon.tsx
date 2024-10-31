// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconReth } from "../../../icons/mono/build/icon-reth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconReth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RethIcon.displayName = 'RethIcon';
}

export default RethIcon;