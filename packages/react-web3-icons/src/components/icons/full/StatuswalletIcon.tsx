// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatuswallet } from "../../../icons/full/build/icon-statuswallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatuswalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatuswallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatuswalletIcon.displayName = 'StatuswalletIcon';
}

export default StatuswalletIcon;