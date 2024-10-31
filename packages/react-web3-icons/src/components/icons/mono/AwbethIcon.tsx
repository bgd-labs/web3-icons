// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwbeth } from "../../../icons/mono/build/icon-awbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwbethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwbethIcon.displayName = 'AwbethIcon';
}

export default AwbethIcon;