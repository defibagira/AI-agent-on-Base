import 'dotenv/config';
import { createPublicClient, formatEther, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { base } from 'viem/chains';

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function checkWallet() {
  const rpcUrl = requireEnv('BASE_MAINNET_RPC_URL');
  const privateKey = requireEnv('AGENT_PRIVATE_KEY') as `0x${string}`;

  const account = privateKeyToAccount(privateKey);
  const client = createPublicClient({ chain: base, transport: http(rpcUrl) });
  const balance = await client.getBalance({ address: account.address });

  return {
    chain: 'base-mainnet',
    rpcUrl,
    address: account.address,
    balanceEth: formatEther(balance),
    mode: 'read_only_check',
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  checkWallet()
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
