// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdc } from "../../../icons/mono/build/icon-statausdc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatausdcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatausdc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdcIcon.displayName = 'StatausdcIcon';
}

export default StatausdcIcon;