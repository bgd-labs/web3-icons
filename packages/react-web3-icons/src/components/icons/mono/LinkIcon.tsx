// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconLink } from "../../../icons/mono/build/icon-link.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const LinkIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconLink.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  LinkIcon.displayName = 'LinkIcon';
}

export default LinkIcon;