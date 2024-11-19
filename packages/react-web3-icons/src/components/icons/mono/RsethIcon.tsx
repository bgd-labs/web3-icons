// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRseth } from "../../../icons/mono/build/icon-rseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RsethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconRseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RsethIcon.displayName = 'RsethIcon';
}

export default RsethIcon;