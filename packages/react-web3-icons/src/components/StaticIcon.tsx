"use client";

import React from "react";
import SVG from "react-inlinesvg";

import { iconUnknown, Web3IconType } from "../icons/full";
import { IconComponentBaseProps } from "../utils";

/**
 * Wrapper for get icons directly from pack
 */
export const StaticIcon = ({
  iconKey,
  githubSrc,
  iconsPack,
  mono,
  loader,
  ...props
}: {
  iconKey: Web3IconType | string;
  iconsPack: Record<string, string>;
  githubSrc?: string;
} & IconComponentBaseProps) => {
  const [isLocalError, setIsLocalError] = React.useState(false);
  const [isGithubError, setIsGithubError] = React.useState(false);

  const iconFormattedKey = iconKey.toLowerCase();

  if (isLocalError && isGithubError) {
    return (
      <SVG
        {...props}
        src={iconUnknown.data}
        uniqueHash={(Math.random() + 1).toString(36).substring(7)}
        uniquifyIDs
        loader={loader}
      />
    );
  }

  if (!isGithubError && githubSrc && isLocalError) {
    return (
      <SVG
        {...props}
        src={githubSrc}
        uniqueHash={(Math.random() + 1).toString(36).substring(7)}
        uniquifyIDs
        onError={() => setIsGithubError(true)}
        loader={loader}
      />
    );
  }

  return (
    <SVG
      {...props}
      src={`data:image/svg+xml;base64,${btoa(
        mono
          ? iconsPack[`${iconFormattedKey}_mono`]
          : iconsPack[iconFormattedKey],
      )}`}
      uniqueHash={(Math.random() + 1).toString(36).substring(7)}
      onError={() => setIsLocalError(true)}
      uniquifyIDs
      loader={loader}
    />
  );
};
