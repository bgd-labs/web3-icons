// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawxdai } from "../../../icons/full/build/icon-statawxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawxdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatawxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawxdaiIcon.displayName = 'StatawxdaiIcon';
}

export default StatawxdaiIcon;