// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAzrx } from "../../../icons/mono/build/icon-azrx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AzrxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAzrx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AzrxIcon.displayName = 'AzrxIcon';
}

export default AzrxIcon;