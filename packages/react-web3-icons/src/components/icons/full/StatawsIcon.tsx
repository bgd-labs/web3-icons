// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataws } from "../../../icons/full/build/icon-stataws.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataws.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawsIcon.displayName = 'StatawsIcon';
}

export default StatawsIcon;