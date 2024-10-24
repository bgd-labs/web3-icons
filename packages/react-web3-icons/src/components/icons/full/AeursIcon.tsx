// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAeurs } from "../../../icons/full/build/icon-aeurs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AeursIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAeurs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AeursIcon.displayName = 'AeursIcon';
}

export default AeursIcon;