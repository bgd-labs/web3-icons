// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataftm } from "../../../icons/mono/build/icon-stataftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataftmIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataftm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataftmIcon.displayName = 'StataftmIcon';
}

export default StataftmIcon;