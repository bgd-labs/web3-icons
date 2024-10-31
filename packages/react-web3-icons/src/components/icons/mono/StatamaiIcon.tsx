// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamai } from "../../../icons/mono/build/icon-statamai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatamaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatamai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamaiIcon.displayName = 'StatamaiIcon';
}

export default StatamaiIcon;