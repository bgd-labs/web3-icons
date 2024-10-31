// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBal } from "../../../icons/full/build/icon-bal.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BalIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBal.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BalIcon.displayName = 'BalIcon';
}

export default BalIcon;