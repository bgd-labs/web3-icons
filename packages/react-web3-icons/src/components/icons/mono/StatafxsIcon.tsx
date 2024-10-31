// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatafxs } from "../../../icons/mono/build/icon-statafxs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatafxsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatafxs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatafxsIcon.displayName = 'StatafxsIcon';
}

export default StatafxsIcon;