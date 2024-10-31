// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconHuobiwallet } from "../../../icons/full/build/icon-huobiwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const HuobiwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconHuobiwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  HuobiwalletIcon.displayName = 'HuobiwalletIcon';
}

export default HuobiwalletIcon;