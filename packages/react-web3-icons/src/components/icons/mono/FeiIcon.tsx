// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFei } from "../../../icons/mono/build/icon-fei.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FeiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFei.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FeiIcon.displayName = 'FeiIcon';
}

export default FeiIcon;