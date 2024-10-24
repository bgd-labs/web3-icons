// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconZrx } from "../../../icons/full/build/icon-zrx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const ZrxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconZrx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZrxIcon.displayName = 'ZrxIcon';
}

export default ZrxIcon;