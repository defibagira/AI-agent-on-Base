# Base Onchain AI Agent

This repository follows a phased build plan for an autonomous onchain AI agent on Base.

## Overview

BASE_SENTINEL is an autonomous AI agent that operates on the Base blockchain. It can:

- **Reason Independently**: Makes decisions based on predefined goals and safety rules
- **Deploy Smart Contracts**: Autonomously deploys and interacts with onchain contracts
- **Execute Transactions**: Signs and sends transactions without human intervention (within safety bounds)
- **Prove Its Actions**: All transactions are publicly verifiable on Base mainnet

This is a proof-of-concept for autonomous AI agents that can own wallets, deploy code, and operate independently on public blockchains while maintaining strict safety guardrails.

### Use Cases

- Autonomous trading agents
- Self-deploying application contracts
- Decentralized autonomous organizations (DAOs)
- AI-powered smart contract management
- Research on autonomous onchain systems

## Phase 1 (already defined)

- Identity, purpose, and hard safety rules are defined in `src/agent.js`.
- Agent reasoning posture is read-only and safety-first.

## Phase 2 additions (command + chain utilities)

- Added runnable TypeScript command utilities for:
  - identity signing (offchain message)
  - wallet read-only balance checks on Base mainnet

> Note: These commands are developer utilities for setup validation and do not introduce autonomous loops.

## Phase 3 - Autonomous Onchain Deployment

Successfully deployed Counter contract to Base mainnet!

**Deployment Details:**
- Network: Base Mainnet
- Contract Address: 0x9a24979f61a050f44570a3a8e535d8bcdb1c2d523
- Deploy Transaction: 0x132b400a580a8a68b0a3b7871ea09c73a18bf9fe51437b04b786c787007de127
- Agent Wallet: 0xCbEFD526D42083034013A9D08D7cB009bE83bC81

**Verify on BaseScan:**
https://basescan.org/address/0x9a24979f61a050f44570a3a8e535d8bcdb1c2d523

The agent successfully deployed a Counter contract that is now live on Base mainnet and ready for autonomous operations.

## Environment

Use `.env.example` to create local `.env`:

- `BASE_MAINNET_RPC_URL`
- `AGENT_PRIVATE_KEY`

`.env` is intentionally gitignored.

## TESTING PHASE 2

1. `npm install`
2. `cp .env.example .env`
3. Edit `.env` with your test private key
4. `npm run sign-identity`
5. Check output in console

Optional wallet read check:

- `npm run wallet-check`

## Quick Start

Get the agent running in 5 minutes:

1. Clone: `git clone https://github.com/defibagira/AI-agent-on-Base.git`
2. Install: `npm install`
3. Setup: `cp .env.example .env`
4. Test: `npm run wallet-check`
5. Deploy: `node --import tsx src/chain/deployCounter.ts`

## Future Roadmap

- Phase 4: ERC-20 token deployment
- Phase 5: X/Farcaster integration
- Phase 6: Autonomous trading
- Phase 7: DAO governance contracts
- Phase 8: Multi-chain deployment

## Security Considerations

- Private keys loaded from .env only (never hardcoded)
- Phase 1-2 read-only, Phase 3 controlled write access
- Hard safety rules in src/agent.js
- All deployments verifiable on BaseScan
- No infinite autonomous loops

## License

MIT License - Open source for research, educational, and commercial use.

## Proof of Autonomous Onchain Action (Base Mainnet)

This agent autonomously deployed and interacted with a smart contract on Base mainnet.

- Counter Deploy Tx:
  https://basescan.org/tx/0x132b400a580a8a68b0a3b7871ea09c73a18bf9fe51437b04b786c787007de127

- increment() Tx:
  https://basescan.org/tx/0x648bd8d1143d3a7e520cfb68e11ef8c70d9a4c43279126cca2d65f478f17277b

These actions were executed without human-in-the-loop approval.