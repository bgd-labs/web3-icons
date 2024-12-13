// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLineasepolia } from "../../../icons/full/build/icon-lineasepolia.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LineasepoliaIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLineasepolia.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LineasepoliaIcon.displayName = 'LineasepoliaIcon';
}

export default LineasepoliaIcon;