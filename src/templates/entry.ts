import template from "lodash.template";

export const renderEntry = template(
  `
// GENERATE BY ./src/scripts/generateComponents.ts
// DO NOT EDIT IT MANUALLY

<%= entry %>
  `.trim(),
);
