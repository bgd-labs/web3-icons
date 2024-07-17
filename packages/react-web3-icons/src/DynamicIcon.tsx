"use client";

import React from "react";
import SVG from "react-inlinesvg";

import IconUnknownFull from "./components/IconUnknownFull";

/**
 * Wrapper for get icons dynamically
 */
export const DynamicIcon = ({
  src,
  loadingComponent,
}: {
  src: string;
  loadingComponent?: React.JSX.Element;
}) => {
  const [isError, setIsError] = React.useState(false);
  return (
    <>
      {isError ? (
        <IconUnknownFull />
      ) : (
        <SVG
          src={src}
          width="100%"
          height="100%"
          loader={loadingComponent}
          uniqueHash={(Math.random() + 1).toString(36).substring(7)}
          uniquifyIDs
          onError={() => setIsError(true)}
        />
      )}
    </>
  );
};
