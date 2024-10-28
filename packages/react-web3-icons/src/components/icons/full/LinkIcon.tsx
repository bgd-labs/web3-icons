// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLink } from "../../../icons/full/build/icon-link.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const LinkIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconLink.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LinkIcon.displayName = 'LinkIcon';
}

export default LinkIcon;