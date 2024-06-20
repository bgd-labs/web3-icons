import { ChainType } from "../types";
import { chainsNames } from "./chainsNames";
export const getChainName = ({ chainId }: Pick<ChainType, "chainId">) => {
  return chainsNames[chainId] ?? "Unknown";
};
