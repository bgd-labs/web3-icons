// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAwone } from "../../../icons/full/build/icon-awone.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AwoneIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAwone.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwoneIcon.displayName = 'AwoneIcon';
}

export default AwoneIcon;