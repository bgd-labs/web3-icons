// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconAjeur } from "../../../icons/full/build/icon-ajeur.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const AjeurIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconAjeur.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  AjeurIcon.displayName = 'AjeurIcon';
}

export default AjeurIcon;