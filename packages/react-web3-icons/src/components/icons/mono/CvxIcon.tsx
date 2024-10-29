// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCvx } from "../../../icons/mono/build/icon-cvx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CvxIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCvx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CvxIcon.displayName = 'CvxIcon';
}

export default CvxIcon;