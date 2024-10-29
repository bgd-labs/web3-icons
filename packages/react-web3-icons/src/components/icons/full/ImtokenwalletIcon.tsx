// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconImtokenwallet } from "../../../icons/full/build/icon-imtokenwallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ImtokenwalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconImtokenwallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ImtokenwalletIcon.displayName = 'ImtokenwalletIcon';
}

export default ImtokenwalletIcon;