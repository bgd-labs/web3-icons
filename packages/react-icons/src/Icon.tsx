
interface IconProps {
  symbol: string;
  variant?: "full" | "mono";
}

export const Icon = ({ symbol, variant }: IconProps) => {
  return <pre>{symbol}</pre>;
};