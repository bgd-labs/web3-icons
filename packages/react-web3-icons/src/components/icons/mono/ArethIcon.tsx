// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAreth } from "../../../icons/mono/build/icon-areth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ArethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAreth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ArethIcon.displayName = 'ArethIcon';
}

export default ArethIcon;