"use client";

import loadable from "@loadable/component";
import React from "react";
import SVG, { Props } from "react-inlinesvg";

import { ComponentsFallback } from "./utils/types";

/**
 * Wrapper for get web3 icons dynamically
 */
export const Web3DynamicIcon = ({
  src,
  loader,
  componentsFallback,
  ...props
}: {
  loader?: React.JSX.Element;
  componentsFallback?: ComponentsFallback;
} & Props) => {
  const [isError, setIsError] = React.useState(false);
  if (!isError) {
    return (
      <SVG
        {...props}
        src={src}
        uniqueHash={(Math.random() + 1).toString(36).substring(7)}
        uniquifyIDs
        onError={() => setIsError(true)}
        loader={loader}
      />
    );
  } else {
    const Icon = loadable(
      async () => {
        if (componentsFallback) {
          try {
            return await componentsFallback.path().then(async (module) => {
              const iconModule = module[`Icon${componentsFallback.name}`];
              if (!iconModule) {
                return await import("./components/IconUnknownFull");
              } else {
                return {
                  default: iconModule,
                };
              }
            });
          } catch (e) {
            return await import("./components/IconUnknownFull");
          }
        } else {
          return await import("./components/IconUnknownFull");
        }
      },
      {
        fallback: loader,
        ssr: true,
      },
    );
    return <Icon className={props.className} />;
  }
};
