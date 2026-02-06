import 'dotenv/config';
import { privateKeyToAccount } from 'viem/accounts';

export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function signAgentIdentity() {
  const privateKey = requireEnv('AGENT_PRIVATE_KEY') as `0x${string}`;
  const account = privateKeyToAccount(privateKey);

  const statement = `I am BASE_SENTINEL operating in read-only mode. Timestamp: ${new Date().toISOString()}`;
  const signature = await account.signMessage({ message: statement });

  return {
    address: account.address,
    statement,
    signature,
  };
}

signAgentIdentity()
  .then((result) => console.log(JSON.stringify(result, null, 2)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });