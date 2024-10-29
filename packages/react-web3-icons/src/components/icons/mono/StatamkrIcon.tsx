// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamkr } from "../../../icons/mono/build/icon-statamkr.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatamkrIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatamkr.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamkrIcon.displayName = 'StatamkrIcon';
}

export default StatamkrIcon;