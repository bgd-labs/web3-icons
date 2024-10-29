// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatamana } from "../../../icons/full/build/icon-statamana.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatamanaIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatamana.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatamanaIcon.displayName = 'StatamanaIcon';
}

export default StatamanaIcon;