// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSeth } from "../../../icons/mono/build/icon-seth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SethIcon.displayName = 'SethIcon';
}

export default SethIcon;