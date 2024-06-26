"use client";

import loadable from "@loadable/component";
import React from "react";

/**
 * Wrapper for Icon component with dynamic import
 */
export const DynamicIcon = ({
  dynamicComponent,
  iconPath,
  loadingComponent,
}: {
  dynamicComponent: () => Promise<any>;
  iconPath: string;
  loadingComponent?: React.JSX.Element;
}) => {
  const Icon = loadable(
    async () => {
      try {
        return dynamicComponent().then((module) => {
          {
            return {
              default: module[`Icon${iconPath}`] ?? module[`IconUnknownFull`],
            };
          }
        });
      } catch (e) {
        return await import("./components/IconUnknownFull");
      }
    },
    {
      fallback: loadingComponent,
    },
  );

  return <Icon />;
};
