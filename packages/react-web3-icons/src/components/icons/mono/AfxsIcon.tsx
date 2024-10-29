// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAfxs } from "../../../icons/mono/build/icon-afxs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AfxsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAfxs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AfxsIcon.displayName = 'AfxsIcon';
}

export default AfxsIcon;