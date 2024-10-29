// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAweth } from "../../../icons/mono/build/icon-aweth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAweth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwethIcon.displayName = 'AwethIcon';
}

export default AwethIcon;