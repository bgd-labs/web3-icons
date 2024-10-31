// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconKncl } from "../../../icons/mono/build/icon-kncl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const KnclIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconKncl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  KnclIcon.displayName = 'KnclIcon';
}

export default KnclIcon;