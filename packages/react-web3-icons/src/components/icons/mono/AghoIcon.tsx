// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAgho } from "../../../icons/mono/build/icon-agho.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AghoIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAgho.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AghoIcon.displayName = 'AghoIcon';
}

export default AghoIcon;