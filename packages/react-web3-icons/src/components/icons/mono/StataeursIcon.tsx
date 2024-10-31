// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeurs } from "../../../icons/mono/build/icon-stataeurs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataeursIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataeurs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataeursIcon.displayName = 'StataeursIcon';
}

export default StataeursIcon;