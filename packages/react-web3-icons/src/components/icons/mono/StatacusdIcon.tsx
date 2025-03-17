// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacusd } from "../../../icons/mono/build/icon-statacusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatacusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatacusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacusdIcon.displayName = 'StatacusdIcon';
}

export default StatacusdIcon;