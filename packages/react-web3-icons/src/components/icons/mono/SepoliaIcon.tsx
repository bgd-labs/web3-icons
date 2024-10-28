// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSepolia } from "../../../icons/mono/build/icon-sepolia.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const SepoliaIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconSepolia.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SepoliaIcon.displayName = 'SepoliaIcon';
}

export default SepoliaIcon;