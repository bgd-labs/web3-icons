// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconFxs } from "../../../icons/full/build/icon-fxs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const FxsIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconFxs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  FxsIcon.displayName = 'FxsIcon';
}

export default FxsIcon;