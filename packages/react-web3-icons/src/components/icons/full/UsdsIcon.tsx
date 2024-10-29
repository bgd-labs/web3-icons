// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconUsds } from "../../../icons/full/build/icon-usds.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const UsdsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconUsds.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UsdsIcon.displayName = 'UsdsIcon';
}

export default UsdsIcon;