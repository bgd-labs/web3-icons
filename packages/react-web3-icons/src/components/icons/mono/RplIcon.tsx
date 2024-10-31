// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconRpl } from "../../../icons/mono/build/icon-rpl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const RplIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconRpl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  RplIcon.displayName = 'RplIcon';
}

export default RplIcon;