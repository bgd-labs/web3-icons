// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatametis } from "../../../icons/mono/build/icon-statametis.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatametisIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatametis.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatametisIcon.displayName = 'StatametisIcon';
}

export default StatametisIcon;