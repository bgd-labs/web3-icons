// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatastg } from "../../../icons/mono/build/icon-statastg.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatastgIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatastg.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatastgIcon.displayName = 'StatastgIcon';
}

export default StatastgIcon;