// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconStataeura } from "../../../icons/mono/build/icon-stataeura.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const StataeuraIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconStataeura.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  StataeuraIcon.displayName = 'StataeuraIcon';
}

export default StataeuraIcon;