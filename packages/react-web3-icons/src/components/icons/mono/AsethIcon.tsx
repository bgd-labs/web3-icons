// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAseth } from "../../../icons/mono/build/icon-aseth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AsethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAseth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsethIcon.displayName = 'AsethIcon';
}

export default AsethIcon;