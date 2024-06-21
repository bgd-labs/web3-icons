import { capitalize, getChainName } from "./index";
import { ChainType } from "./types";
export const getChainIconPath = ({ chainId }: Pick<ChainType, "chainId">) => {
  const chainName = getChainName({ chainId });
  return `${capitalize(chainName.replace(/\s/g, "").toLowerCase())}`;
};
