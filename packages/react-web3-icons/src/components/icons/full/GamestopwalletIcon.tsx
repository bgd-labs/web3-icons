// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconGamestopwallet } from "../../../icons/full/build/icon-gamestopwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const GamestopwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconGamestopwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GamestopwalletIcon.displayName = 'GamestopwalletIcon';
}

export default GamestopwalletIcon;