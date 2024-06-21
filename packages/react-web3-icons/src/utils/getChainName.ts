import { chainsNames } from "./chainsNames";
import { ChainType } from "./types";
export const getChainName = ({ chainId }: Pick<ChainType, "chainId">) => {
  return chainsNames[chainId] ?? "Unknown";
};
