import { ComponentProps } from "react";

type FormatMonoSvgCodeOptions = Pick<ComponentProps<"img">, "color"> & {
  svgCode?: string;
  mono?: boolean;
};

export const formatMonoSvgCode = ({
  svgCode,
  mono,
  ...props
}: FormatMonoSvgCodeOptions) => {
  return mono && props.color && svgCode
    ? svgCode.replaceAll("currentColor", props.color)
    : svgCode;
};
