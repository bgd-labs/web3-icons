import template from "lodash.template";

export const renderEntry = template(
  `
// GENERATE BY ./src/scripts/generateComponents.ts
// DON NOT EDIT IT MANUALLY

<%= entry %>
  `.trim(),
);
