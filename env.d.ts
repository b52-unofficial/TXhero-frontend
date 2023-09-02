declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_BACKEND_API_URL: string;
    readonly NEXT_PUBLIC_NETWORK_NAME: string;
    readonly NEXT_PUBLIC_RPC_URL: string;
    readonly NEXT_PUBLIC_CHAIN_ID: string;
    readonly NEXT_PUBLIC_CURRENCY_NAME: string;
    readonly NEXT_PUBLIC_CURRENCY_SYMBOL: string;
    readonly NEXT_PUBLIC_BLOCK_EXPLORER_URL: string;
  }
}
