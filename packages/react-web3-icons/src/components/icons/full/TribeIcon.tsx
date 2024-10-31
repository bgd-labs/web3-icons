// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTribe } from "../../../icons/full/build/icon-tribe.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const TribeIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconTribe.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TribeIcon.displayName = 'TribeIcon';
}

export default TribeIcon;