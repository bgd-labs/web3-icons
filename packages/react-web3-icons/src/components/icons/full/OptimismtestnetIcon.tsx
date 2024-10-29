// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOptimismtestnet } from "../../../icons/full/build/icon-optimismtestnet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const OptimismtestnetIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconOptimismtestnet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OptimismtestnetIcon.displayName = 'OptimismtestnetIcon';
}

export default OptimismtestnetIcon;