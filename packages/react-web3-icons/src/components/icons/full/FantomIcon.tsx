// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFantom } from "../../../icons/full/build/icon-fantom.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FantomIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFantom.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FantomIcon.displayName = 'FantomIcon';
}

export default FantomIcon;