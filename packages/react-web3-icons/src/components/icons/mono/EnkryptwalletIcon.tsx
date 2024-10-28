// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEnkryptwallet } from "../../../icons/mono/build/icon-enkryptwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EnkryptwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEnkryptwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EnkryptwalletIcon.displayName = 'EnkryptwalletIcon';
}

export default EnkryptwalletIcon;