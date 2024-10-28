// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAbnbx } from "../../../icons/full/build/icon-abnbx.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const AbnbxIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconAbnbx.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AbnbxIcon.displayName = 'AbnbxIcon';
}

export default AbnbxIcon;