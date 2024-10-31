// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOperawallet } from "../../../icons/full/build/icon-operawallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const OperawalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconOperawallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OperawalletIcon.displayName = 'OperawalletIcon';
}

export default OperawalletIcon;