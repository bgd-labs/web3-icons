// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconEnj } from "../../../icons/full/build/icon-enj.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EnjIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEnj.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EnjIcon.displayName = 'EnjIcon';
}

export default EnjIcon;