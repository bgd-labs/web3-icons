// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataweth } from "../../../icons/mono/build/icon-stataweth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataweth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawethIcon.displayName = 'StatawethIcon';
}

export default StatawethIcon;