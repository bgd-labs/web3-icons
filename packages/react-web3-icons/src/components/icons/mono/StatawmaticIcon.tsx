// GENERATED BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStatawmatic } from "../../../icons/mono/build/icon-statawmatic.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StatawmaticIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStatawmatic.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StatawmaticIcon.displayName = 'StatawmaticIcon';
}

export default StatawmaticIcon;