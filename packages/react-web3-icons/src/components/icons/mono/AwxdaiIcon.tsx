// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconAwxdai } from "../../../icons/mono/build/icon-awxdai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AwxdaiIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAwxdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AwxdaiIcon.displayName = 'AwxdaiIcon';
}

export default AwxdaiIcon;