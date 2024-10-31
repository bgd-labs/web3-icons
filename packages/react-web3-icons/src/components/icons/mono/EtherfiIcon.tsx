// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconEtherfi } from "../../../icons/mono/build/icon-etherfi.icon";
import { IconComponentBaseProps } from "../../../utils";
import { Image } from "../../Base/Image";

const EtherfiIcon = (props: IconComponentBaseProps) => {
  return <Image svgCode={iconEtherfi.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  EtherfiIcon.displayName = 'EtherfiIcon';
}

export default EtherfiIcon;