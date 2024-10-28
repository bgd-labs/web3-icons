// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAdpi } from "../../../icons/mono/build/icon-adpi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AdpiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAdpi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AdpiIcon.displayName = 'AdpiIcon';
}

export default AdpiIcon;