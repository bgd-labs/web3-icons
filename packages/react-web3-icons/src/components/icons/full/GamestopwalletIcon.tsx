// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGamestopwallet } from "../../../icons/full/build/icon-gamestopwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GamestopwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGamestopwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GamestopwalletIcon.displayName = 'GamestopwalletIcon';
}

export default GamestopwalletIcon;