// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataampl } from "../../../icons/full/build/icon-stataampl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataamplIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataampl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataamplIcon.displayName = 'StataamplIcon';
}

export default StataamplIcon;