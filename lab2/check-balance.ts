import "dotenv/config";

import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

import { airdropIfRequired} from "@solana-developers/helpers";



const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

console.log("Connected to devnet", connection.rpcEndpoint);

const pubKey = new PublicKey("3MsYEsdy2zpwfVnjHXuBRxuBXXcUyJA3xXAnQBJYvjia");

const balanceInLamports = await connection.getBalance(pubKey);

console.log("Done! Balance in lamports:", balanceInLamports);


console.log("Requesting airdrop of 1 SOL...");

await airdropIfRequired(
  connection,
  pubKey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);

console.log("Done! Airdropped 1 SOL completed!");

const balanceInLamports2 = await connection.getBalance(pubKey);

console.log("Done! Updated balance in lamports:", balanceInLamports2);