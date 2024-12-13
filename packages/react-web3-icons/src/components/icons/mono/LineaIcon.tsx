// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLinea } from "../../../icons/mono/build/icon-linea.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LineaIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLinea.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LineaIcon.displayName = 'LineaIcon';
}

export default LineaIcon;