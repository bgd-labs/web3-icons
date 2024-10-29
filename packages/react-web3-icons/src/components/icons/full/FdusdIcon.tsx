// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconFdusd } from "../../../icons/full/build/icon-fdusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const FdusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconFdusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FdusdIcon.displayName = 'FdusdIcon';
}

export default FdusdIcon;