// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconCrv } from "../../../icons/mono/build/icon-crv.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const CrvIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconCrv.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  CrvIcon.displayName = 'CrvIcon';
}

export default CrvIcon;