// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFtm } from "../../../icons/full/build/icon-ftm.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FtmIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFtm.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FtmIcon.displayName = 'FtmIcon';
}

export default FtmIcon;