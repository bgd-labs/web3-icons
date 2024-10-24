// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconEns } from "../../../icons/full/build/icon-ens.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EnsIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEns.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EnsIcon.displayName = 'EnsIcon';
}

export default EnsIcon;