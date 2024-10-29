// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLiqualitywallet } from "../../../icons/full/build/icon-liqualitywallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LiqualitywalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLiqualitywallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LiqualitywalletIcon.displayName = 'LiqualitywalletIcon';
}

export default LiqualitywalletIcon;