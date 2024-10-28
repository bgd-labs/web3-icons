// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconZrx } from "../../../icons/mono/build/icon-zrx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ZrxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconZrx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZrxIcon.displayName = 'ZrxIcon';
}

export default ZrxIcon;