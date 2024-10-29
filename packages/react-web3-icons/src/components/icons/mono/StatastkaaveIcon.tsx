// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastkaave } from "../../../icons/mono/build/icon-statastkaave.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatastkaaveIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatastkaave.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastkaaveIcon.displayName = 'StatastkaaveIcon';
}

export default StatastkaaveIcon;