import React, { FC, useEffect, useState } from "react";

import { IconComponentBaseProps } from "../../utils";
import { IconPlaceholder, IconPlaceholderProps } from "./IconPlaceholder";
import { Image } from "./Image";

type GithubSVGIconProps = Pick<IconComponentBaseProps, "loader"> & {
  githubSrc: string;
  abbreviation: string;
  fallbackProps?: Omit<IconPlaceholderProps, "value">;
};

const GithubSvgIcon: FC<GithubSVGIconProps> = ({
  githubSrc,
  loader,
  abbreviation,
  fallbackProps = {},
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const [svgCode, setSvgCode] = useState<string>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadSvg = async () => {
      const result = await fetch(githubSrc);
      const svg = await result.text();

      if (!result.ok) {
        throw new Error("Failed to load Github icon");
      }

      setSvgCode(svg);
    };

    setLoading(true);
    setIsError(false);
    loadSvg()
      .catch(() => setIsError(true))
      .finally(() => setLoading(false));
  }, [githubSrc]);

  if (loading) {
    return loader;
  }

  if (!svgCode || isError) {
    return <IconPlaceholder value={abbreviation} {...fallbackProps} />;
  }

  return <Image svgCode={svgCode} {...props} />;
};

export default GithubSvgIcon;
