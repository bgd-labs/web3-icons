// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwftm } from "../../../icons/mono/build/icon-awftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwftmIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwftmIcon.displayName = 'AwftmIcon';
}

export default AwftmIcon;