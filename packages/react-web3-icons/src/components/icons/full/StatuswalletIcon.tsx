// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatuswallet } from "../../../icons/full/build/icon-statuswallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatuswalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatuswallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatuswalletIcon.displayName = 'StatuswalletIcon';
}

export default StatuswalletIcon;