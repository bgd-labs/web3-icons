interface IconProps {
  symbol: string;
  variant?: "full" | "mono";
}

export const AssetIcon = ({ symbol, variant }: IconProps) => {
  return <span>{symbol}</span>;
};