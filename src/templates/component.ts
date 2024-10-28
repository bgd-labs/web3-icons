import template from "lodash.template";

export const renderComponent = template(
  `
// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

import React from "react";

import { <%= iconDataName %> } from "../../../icons/<%= mode %>/build/<%= fileName %>";
import { IconComponentBaseProps } from "../../../utils";
import { SVG } from "../../Base/SVG";

const <%= componentName %> = (props: IconComponentBaseProps) => {
  return <SVG svgCode={<%= iconDataName %>.data} {...props} />;
};

if (process.env.NODE_ENV !== 'production') {
  <%= componentName %>.displayName = '<%= componentName %>';
}

export default <%= componentName %>;
  `.trim(),
);
