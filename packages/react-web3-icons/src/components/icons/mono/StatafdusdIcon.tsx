// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

import React from "react";

import { iconStatafdusd } from "../../../icons/mono/build/icon-statafdusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const StatafdusdIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconStatafdusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatafdusdIcon.displayName = 'StatafdusdIcon';
}

export default StatafdusdIcon;