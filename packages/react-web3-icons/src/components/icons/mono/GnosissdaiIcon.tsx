// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconGnosissdai } from "../../../icons/mono/build/icon-gnosissdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const GnosissdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconGnosissdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  GnosissdaiIcon.displayName = 'GnosissdaiIcon';
}

export default GnosissdaiIcon;