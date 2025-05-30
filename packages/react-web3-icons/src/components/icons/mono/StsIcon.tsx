// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSts } from "../../../icons/mono/build/icon-sts.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StsIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSts.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StsIcon.displayName = 'StsIcon';
}

export default StsIcon;