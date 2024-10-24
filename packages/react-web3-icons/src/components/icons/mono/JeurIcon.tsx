// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconJeur } from "../../../icons/mono/build/icon-jeur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const JeurIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconJeur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  JeurIcon.displayName = 'JeurIcon';
}

export default JeurIcon;