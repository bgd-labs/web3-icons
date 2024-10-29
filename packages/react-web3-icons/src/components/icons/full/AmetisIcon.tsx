// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmetis } from "../../../icons/full/build/icon-ametis.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AmetisIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAmetis.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmetisIcon.displayName = 'AmetisIcon';
}

export default AmetisIcon;