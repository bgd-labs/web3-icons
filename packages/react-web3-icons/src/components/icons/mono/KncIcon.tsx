// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconKnc } from "../../../icons/mono/build/icon-knc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const KncIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconKnc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  KncIcon.displayName = 'KncIcon';
}

export default KncIcon;