import * as React from "react";
import "./styles.scss";

interface IconProps {
  symbol: string;
}

export const Icon: React.FC<IconProps> = ({ symbol }: IconProps) => {
  return <span className={`icon`}>{symbol}</span>;
};
