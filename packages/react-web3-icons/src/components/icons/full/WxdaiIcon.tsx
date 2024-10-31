// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWxdai } from "../../../icons/full/build/icon-wxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WxdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WxdaiIcon.displayName = 'WxdaiIcon';
}

export default WxdaiIcon;