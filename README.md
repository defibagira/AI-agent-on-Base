# Base Onchain AI Agent

This repository follows a phased build plan for an autonomous onchain AI agent on Base.

## Phase 1 (already defined)

- Identity, purpose, and hard safety rules are defined in `src/agent.js`.
- Agent reasoning posture is read-only and safety-first.

## Phase 2 additions (command + chain utilities)

- Added runnable TypeScript command utilities for:
  - identity signing (offchain message)
  - wallet read-only balance checks on Base mainnet

> Note: These commands are developer utilities for setup validation and do not introduce autonomous loops.

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
