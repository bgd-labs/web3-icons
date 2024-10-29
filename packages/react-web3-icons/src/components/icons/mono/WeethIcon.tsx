// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconWeeth } from "../../../icons/mono/build/icon-weeth.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const WeethIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconWeeth.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  WeethIcon.displayName = 'WeethIcon';
}

export default WeethIcon;