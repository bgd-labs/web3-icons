"use client";

import loadable from "@loadable/component";
import React from "react";

/**
 * Wrapper for Icon component with dynamic import
 */
export const DynamicIcon = ({
  dynamicComponent,
  iconPath,
  iconName,
  loadingComponent,
}: {
  dynamicComponent: () => Promise<any>;
  iconPath: string;
  iconName: string;
  loadingComponent?: React.JSX.Element;
}) => {
  const Icon = loadable(
    async () => {
      try {
        return await dynamicComponent().then(async (module) => {
          const iconModule = module[`Icon${iconName}`];
          if (!iconModule) {
            try {
              const svgFromGithubResponse = await fetch(iconPath);
              if (svgFromGithubResponse.ok) {
                return {
                  default: () => (
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={iconPath}
                      alt={iconName}
                    />
                  ),
                };
              } else {
                return await import("./components/IconUnknownFull");
              }
            } catch (e) {
              return await import("./components/IconUnknownFull");
            }
          } else {
            return {
              default: iconModule,
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
