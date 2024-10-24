// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconUst } from "../../../icons/mono/build/icon-ust.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const UstIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconUst.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  UstIcon.displayName = 'UstIcon';
}

export default UstIcon;