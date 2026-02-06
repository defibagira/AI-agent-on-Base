import 'dotenv/config';
import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { base } from 'viem/chains';

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

const COUNTER_BYTECODE = "0x6080604052348015600e575f5ffd5b503360015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101ec8061005c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c806306661abd146100435780631f21cc9114610061578063d09de08a1461007f575b5f5ffd5b61004b610089565b60405161005891906100e5565b60405180910390f35b61006961008e565b604051610076919061013d565b60405180910390f35b6100876100b3565b005b5f5481565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60015f5f8282546100c49190610183565b92505081905550565b5f819050919050565b6100df816100cd565b82525050565b5f6020820190506100f85f8301846100d6565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610127826100fe565b9050919050565b6101378161011d565b82525050565b5f6020820190506101505f83018461012e565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61018d826100cd565b9150610198836100cd565b92508282019050808211156101b0576101af610156565b5b9291505056fea26469706673582212208f6d773d4d875c74af6aabdfa1ad63b37de610b01b4d3aee4558eb51e0c069e364736f6c634300081f0033";

export async function deployAndIncrementCounter() {
  const rpcUrl = requireEnv('BASE_MAINNET_RPC_URL');
  const privateKey = requireEnv('AGENT_PRIVATE_KEY') as `0x${string}`;

  const account = privateKeyToAccount(privateKey);
  const publicClient = createPublicClient({ chain: base, transport: http(rpcUrl) });
  const walletClient = createWalletClient({ chain: base, transport: http(rpcUrl), account });

  // Deploy Counter contract
  console.log('Deploying Counter contract...');
  const deployHash = await walletClient.deployContract({
    abi: [],
    bytecode: COUNTER_BYTECODE as `0x${string}`,
  });

  console.log('Deploy tx hash:', deployHash);

  // Get receipt
  const receipt = await publicClient.waitForTransactionReceipt({ hash: deployHash });
  const contractAddress = receipt.contractAddress;

  console.log('Counter deployed at:', contractAddress);

  return {
    deployTxHash: deployHash,
    contractAddress,
  };
}

deployAndIncrementCounter()
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });