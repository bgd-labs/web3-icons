// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEurs } from "../../../icons/mono/build/icon-eurs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const EursIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconEurs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EursIcon.displayName = 'EursIcon';
}

export default EursIcon;