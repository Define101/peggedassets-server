const chainContracts = {
  ethereum: {
    issued: ["0x8238884Ec9668Ef77B90C6dfF4D1a9F4F4823BFe"],
  },
  base: {
    issued: ["0xaD55aebc9b8c03FC43cd9f62260391c13c23e7c0"],
  },
};
import { addChainExports } from "../helper/getSupply";
const adapter = addChainExports(chainContracts);
export default adapter;