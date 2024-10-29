// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEzeth } from "../../../icons/mono/build/icon-ezeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EzethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEzeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EzethIcon.displayName = 'EzethIcon';
}

export default EzethIcon;