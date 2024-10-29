// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatasteur } from "../../../icons/full/build/icon-statasteur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatasteurIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatasteur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatasteurIcon.displayName = 'StatasteurIcon';
}

export default StatasteurIcon;