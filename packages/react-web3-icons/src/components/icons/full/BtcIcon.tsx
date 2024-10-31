// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBtc } from "../../../icons/full/build/icon-btc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BtcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BtcIcon.displayName = 'BtcIcon';
}

export default BtcIcon;