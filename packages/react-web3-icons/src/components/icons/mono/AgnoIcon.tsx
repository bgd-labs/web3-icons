// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAgno } from "../../../icons/mono/build/icon-agno.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AgnoIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAgno.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AgnoIcon.displayName = 'AgnoIcon';
}

export default AgnoIcon;