// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconOwnbitwallet } from "../../../icons/full/build/icon-ownbitwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OwnbitwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOwnbitwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OwnbitwalletIcon.displayName = 'OwnbitwalletIcon';
}

export default OwnbitwalletIcon;