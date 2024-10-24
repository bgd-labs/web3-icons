// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconLiqualitywallet } from "../../../icons/mono/build/icon-liqualitywallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const LiqualitywalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconLiqualitywallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LiqualitywalletIcon.displayName = 'LiqualitywalletIcon';
}

export default LiqualitywalletIcon;