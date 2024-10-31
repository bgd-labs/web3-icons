// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAxdai } from "../../../icons/full/build/icon-axdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AxdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AxdaiIcon.displayName = 'AxdaiIcon';
}

export default AxdaiIcon;