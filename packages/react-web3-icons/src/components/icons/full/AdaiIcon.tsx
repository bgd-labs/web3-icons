// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAdai } from "../../../icons/full/build/icon-adai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AdaiIcon.displayName = 'AdaiIcon';
}

export default AdaiIcon;