"use client";

import loadable from "@loadable/component";
import { createAlova, useRequest } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import ReactHook from "alova/react";
import React from "react";
import SVG, { Props } from "react-inlinesvg";

import { ComponentsFallback } from "./utils/types";

const alovaInstance = createAlova({
  requestAdapter: GlobalFetch(),
  statesHook: ReactHook,
  responded: {
    onSuccess: async (response) => {
      if (response && response.ok) {
        const svgCode = await response.text();
        return svgCode ? svgCode : undefined;
      } else {
        return undefined;
      }
    },
  },
});
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
  const { loading, data: svgCode } = useRequest(alovaInstance.Get<string>(src));
  if (loading && !svgCode) {
    return loader;
  }
  if (svgCode) {
    return (
      <SVG
        {...props}
        src={svgCode}
        uniqueHash={(Math.random() + 1).toString(36).substring(7)}
        uniquifyIDs
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
