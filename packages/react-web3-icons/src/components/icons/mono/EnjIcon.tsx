// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEnj } from "../../../icons/mono/build/icon-enj.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EnjIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEnj.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EnjIcon.displayName = 'EnjIcon';
}

export default EnjIcon;