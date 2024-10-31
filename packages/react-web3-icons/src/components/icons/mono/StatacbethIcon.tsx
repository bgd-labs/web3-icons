// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatacbeth } from "../../../icons/mono/build/icon-statacbeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatacbethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatacbeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatacbethIcon.displayName = 'StatacbethIcon';
}

export default StatacbethIcon;