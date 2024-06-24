"use client";

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
  loadingComponent?: React.ReactNode;
}) => {
  const Icon = React.lazy(async () => {
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
  });

  return (
    <React.Suspense fallback={loadingComponent ?? <div />}>
      <Icon />
    </React.Suspense>
  );
};
