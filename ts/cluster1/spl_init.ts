import { Keypair, Connection, Commitment } from '@solana/web3.js'
import { createMint } from '@solana/spl-token'
import { TURBIN3_WALLET } from './config'

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(TURBIN3_WALLET))

//Create a Solana devnet connection
const commitment: Commitment = 'confirmed'
const connection = new Connection('https://api.devnet.solana.com', commitment)

;(async () => {
  try {
    // Start here
    const mint = await createMint(
      connection,
      keypair,
      keypair.publicKey,
      null,
      6
    )

    console.log('Mint address:', mint)
  } catch (error) {
    console.log(`Oops, something went wrong: ${error}`)
  }
})()
