"use client";

import React, { useEffect } from "react";
import SVG from "react-inlinesvg";

import { iconUnknown, Web3IconType } from "../icons/full";
import { IconComponentBaseProps } from "../utils";
import { generateUniqueHash } from "../utils/generateUniqueHash";

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
  const iconFormattedKey = iconKey.toLowerCase();

  const [isLocalError, setIsLocalError] = React.useState(false);
  const [isGithubError, setIsGithubError] = React.useState(false);
  const [svgCode, setSvgCode] = React.useState<string | undefined>(
    mono ? iconsPack[`${iconFormattedKey}_mono`] : iconsPack[iconFormattedKey],
  );

  useEffect(() => {
    setSvgCode(
      mono
        ? iconsPack[`${iconFormattedKey}_mono`]
        : iconsPack[iconFormattedKey],
    );
  }, [mono, iconKey]);

  if (isLocalError && isGithubError) {
    return (
      <SVG
        {...props}
        src={iconUnknown.data}
        uniqueHash={generateUniqueHash()}
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
        uniqueHash={generateUniqueHash()}
        uniquifyIDs
        onError={() => setIsGithubError(true)}
        loader={loader}
      />
    );
  }

  return (
    <SVG
      {...props}
      src={svgCode ? `data:image/svg+xml;base64,${btoa(svgCode)}` : ""}
      uniqueHash={generateUniqueHash()}
      onError={() => setIsLocalError(true)}
      uniquifyIDs
      loader={loader}
    />
  );
};
