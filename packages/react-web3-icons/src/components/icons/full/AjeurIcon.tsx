// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAjeur } from "../../../icons/full/build/icon-ajeur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AjeurIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAjeur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AjeurIcon.displayName = 'AjeurIcon';
}

export default AjeurIcon;