// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFantomtestnet } from "../../../icons/full/build/icon-fantomtestnet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FantomtestnetIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFantomtestnet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FantomtestnetIcon.displayName = 'FantomtestnetIcon';
}

export default FantomtestnetIcon;