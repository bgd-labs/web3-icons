// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconImpersonatedwallet } from "../../../icons/full/build/icon-impersonatedwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ImpersonatedwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconImpersonatedwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ImpersonatedwalletIcon.displayName = 'ImpersonatedwalletIcon';
}

export default ImpersonatedwalletIcon;