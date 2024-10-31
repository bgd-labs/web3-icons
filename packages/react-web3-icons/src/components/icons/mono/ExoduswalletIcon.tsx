// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconExoduswallet } from "../../../icons/mono/build/icon-exoduswallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const ExoduswalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconExoduswallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  ExoduswalletIcon.displayName = 'ExoduswalletIcon';
}

export default ExoduswalletIcon;