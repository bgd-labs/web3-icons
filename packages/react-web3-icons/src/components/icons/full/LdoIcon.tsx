// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLdo } from "../../../icons/full/build/icon-ldo.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LdoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLdo.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LdoIcon.displayName = 'LdoIcon';
}

export default LdoIcon;