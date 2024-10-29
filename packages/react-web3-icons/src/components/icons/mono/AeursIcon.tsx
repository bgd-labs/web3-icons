// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAeurs } from "../../../icons/mono/build/icon-aeurs.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AeursIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAeurs.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AeursIcon.displayName = 'AeursIcon';
}

export default AeursIcon;