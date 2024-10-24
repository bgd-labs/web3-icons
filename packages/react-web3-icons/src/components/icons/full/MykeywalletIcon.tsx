// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconMykeywallet } from "../../../icons/full/build/icon-mykeywallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const MykeywalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconMykeywallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MykeywalletIcon.displayName = 'MykeywalletIcon';
}

export default MykeywalletIcon;