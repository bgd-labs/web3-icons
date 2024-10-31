// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatausdbc } from "../../../icons/mono/build/icon-statausdbc.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatausdbcIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatausdbc.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatausdbcIcon.displayName = 'StatausdbcIcon';
}

export default StatausdbcIcon;