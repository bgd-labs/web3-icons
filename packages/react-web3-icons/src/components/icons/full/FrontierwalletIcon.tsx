// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFrontierwallet } from "../../../icons/full/build/icon-frontierwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FrontierwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFrontierwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FrontierwalletIcon.displayName = 'FrontierwalletIcon';
}

export default FrontierwalletIcon;