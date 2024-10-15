"use client";

import React, { useEffect } from "react";
import InlineSVG from "react-inlinesvg";

import {
  generateUniqueHash,
  getIconData,
  getIconsPack,
  IconComponentBaseProps,
} from "../utils";
import { formatMonoSvgCode, SVG } from "./SVG";

/**
 * Wrapper for get icons directly from pack
 */
export const StaticIcon = ({
  symbol,
  chainId,
  walletKey,
  brandKey,
  assetTag,
  formatSymbol,
  mono,
  loader,
  ...props
}: IconComponentBaseProps) => {
  const iconsPack = getIconsPack({ symbol, chainId, walletKey, brandKey });
  const { iconKey: key, iconPathToRepo: githubSrc } = getIconData({
    symbol,
    chainId,
    walletKey,
    brandKey,
    assetTag,
    formatSymbol,
    mono,
  });

  const iconFormattedKey = key.toLowerCase();

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
  }, [mono, iconFormattedKey]);

  if (!isGithubError && githubSrc && !svgCode) {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      <InlineSVG
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
      svgCode={formatMonoSvgCode({ mono, svgCode, ...props })}
      loader={loader}
      {...props}
    />
  );
};
