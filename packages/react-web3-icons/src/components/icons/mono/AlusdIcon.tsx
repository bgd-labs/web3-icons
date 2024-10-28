// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAlusd } from "../../../icons/mono/build/icon-alusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AlusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAlusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlusdIcon.displayName = 'AlusdIcon';
}

export default AlusdIcon;