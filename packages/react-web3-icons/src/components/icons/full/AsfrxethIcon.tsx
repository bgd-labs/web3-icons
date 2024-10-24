// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAsfrxeth } from "../../../icons/full/build/icon-asfrxeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AsfrxethIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAsfrxeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AsfrxethIcon.displayName = 'AsfrxethIcon';
}

export default AsfrxethIcon;