// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAsnx } from "../../../icons/mono/build/icon-asnx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsnxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsnx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsnxIcon.displayName = 'AsnxIcon';
}

export default AsnxIcon;