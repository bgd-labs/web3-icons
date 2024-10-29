// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAlusd } from "../../../icons/full/build/icon-alusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AlusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAlusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AlusdIcon.displayName = 'AlusdIcon';
}

export default AlusdIcon;