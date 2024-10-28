// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconPhantomwallet } from "../../../icons/mono/build/icon-phantomwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const PhantomwalletIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconPhantomwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  PhantomwalletIcon.displayName = 'PhantomwalletIcon';
}

export default PhantomwalletIcon;