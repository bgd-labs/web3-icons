// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAmpl } from "../../../icons/mono/build/icon-ampl.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AmplIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAmpl.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AmplIcon.displayName = 'AmplIcon';
}

export default AmplIcon;