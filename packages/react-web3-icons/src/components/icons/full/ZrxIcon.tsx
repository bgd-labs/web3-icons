// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconZrx } from "../../../icons/full/build/icon-zrx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ZrxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconZrx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ZrxIcon.displayName = 'ZrxIcon';
}

export default ZrxIcon;