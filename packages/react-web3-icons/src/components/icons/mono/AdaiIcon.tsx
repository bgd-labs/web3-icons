// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAdai } from "../../../icons/mono/build/icon-adai.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AdaiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAdai.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AdaiIcon.displayName = 'AdaiIcon';
}

export default AdaiIcon;