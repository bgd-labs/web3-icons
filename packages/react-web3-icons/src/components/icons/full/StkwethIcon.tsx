// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStkweth } from "../../../icons/full/build/icon-stkweth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StkwethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStkweth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StkwethIcon.displayName = 'StkwethIcon';
}

export default StkwethIcon;