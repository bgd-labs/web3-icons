// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatafdusd } from "../../../icons/full/build/icon-statafdusd.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatafdusdIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatafdusd.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatafdusdIcon.displayName = 'StatafdusdIcon';
}

export default StatafdusdIcon;