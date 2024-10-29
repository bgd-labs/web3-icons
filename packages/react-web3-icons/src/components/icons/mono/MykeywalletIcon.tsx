// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconMykeywallet } from "../../../icons/mono/build/icon-mykeywallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const MykeywalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconMykeywallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  MykeywalletIcon.displayName = 'MykeywalletIcon';
}

export default MykeywalletIcon;