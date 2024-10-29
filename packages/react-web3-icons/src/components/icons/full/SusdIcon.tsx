// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconSusd } from "../../../icons/full/build/icon-susd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const SusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconSusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  SusdIcon.displayName = 'SusdIcon';
}

export default SusdIcon;