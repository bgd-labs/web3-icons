// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconWxdai } from "../../../icons/mono/build/icon-wxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const WxdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconWxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WxdaiIcon.displayName = 'WxdaiIcon';
}

export default WxdaiIcon;