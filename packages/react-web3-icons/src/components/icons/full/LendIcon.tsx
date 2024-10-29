// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLend } from "../../../icons/full/build/icon-lend.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LendIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLend.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LendIcon.displayName = 'LendIcon';
}

export default LendIcon;