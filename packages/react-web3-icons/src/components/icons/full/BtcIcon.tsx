// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconBtc } from "../../../icons/full/build/icon-btc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const BtcIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconBtc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BtcIcon.displayName = 'BtcIcon';
}

export default BtcIcon;