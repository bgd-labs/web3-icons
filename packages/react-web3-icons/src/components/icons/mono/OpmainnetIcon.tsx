// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { iconOpmainnet } from "../../../icons/mono/build/icon-opmainnet.icon";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const OpmainnetIcon = (props: IconComponentBaseProps) => {
  return <SVG svgCode={iconOpmainnet.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  OpmainnetIcon.displayName = 'OpmainnetIcon';
}

export default OpmainnetIcon;