// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconTusd } from "../../../icons/full/build/icon-tusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const TusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconTusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  TusdIcon.displayName = 'TusdIcon';
}

export default TusdIcon;