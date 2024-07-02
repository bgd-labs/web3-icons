import { capitalize, getChainName, IconVariant } from "./index";
import { ChainType } from "./types";
export const getChainIconPath = ({
  chainId,
  variant,
}: Pick<ChainType, "chainId"> & { variant?: IconVariant }) => {
  const chainName = getChainName({ chainId });
  return `${capitalize(chainName.replace(/\s/g, "").toLowerCase())}${capitalize(variant ?? IconVariant.Full)}`;
};
