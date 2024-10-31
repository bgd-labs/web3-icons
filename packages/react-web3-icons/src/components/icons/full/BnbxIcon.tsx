// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconBnbx } from "../../../icons/full/build/icon-bnbx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const BnbxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconBnbx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  BnbxIcon.displayName = 'BnbxIcon';
}

export default BnbxIcon;