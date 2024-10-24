// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAampl } from "../../../icons/mono/build/icon-aampl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AamplIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAampl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AamplIcon.displayName = 'AamplIcon';
}

export default AamplIcon;