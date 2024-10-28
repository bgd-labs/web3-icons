// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAmetis } from "../../../icons/full/build/icon-ametis.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AmetisIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAmetis.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmetisIcon.displayName = 'AmetisIcon';
}

export default AmetisIcon;