// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataxdai } from "../../../icons/full/build/icon-stataxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataxdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataxdaiIcon.displayName = 'StataxdaiIcon';
}

export default StataxdaiIcon;