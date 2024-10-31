// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTallyhowallet } from "../../../icons/mono/build/icon-tallyhowallet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const TallyhowalletIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconTallyhowallet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TallyhowalletIcon.displayName = 'TallyhowalletIcon';
}

export default TallyhowalletIcon;