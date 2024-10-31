// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAtokenwallet } from "../../../icons/full/build/icon-atokenwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AtokenwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAtokenwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AtokenwalletIcon.displayName = 'AtokenwalletIcon';
}

export default AtokenwalletIcon;