"use client";

import React from "react";

/**
 * Wrapper for Icon component with dynamic import
 */
export const DynamicIcon = ({
  dynamicComponent,
  loadingComponent,
}: {
  dynamicComponent: () => Promise<{ default: () => Element }>;
  loadingComponent?: React.ReactNode;
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const Icon = React.lazy(async () => {
    try {
      return await dynamicComponent();
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
