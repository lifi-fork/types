import { ChainId, ChainKey, Coin, CoinKey, Token } from './base'

export const defaultCoins: Array<Coin> = [
  // NATIVE COINS
  // > ETH
  {
    key: CoinKey.ETH,
    name: CoinKey.ETH,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.BSC]: {
        id: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.POL]: {
        id: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.DAI]: {
        id: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.OPT]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.OPT,
        chainKey: ChainKey.OPT,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.OKT]: {
        // guessed from debank api
        id: '0xef71ca2ee68f45b9ad6f72fbdb33d707b872315c',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.OKT,
        chainKey: ChainKey.OKT,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.ARB]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.FTM]: {
        id: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.FTM,
        chainKey: ChainKey.FTM,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.AVA]: {
        id: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      // [ChainKey.ARB]: { // WETH
      //   id: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      //   symbol: CoinKey.ETH,
      //   decimals: 18,
      //   chainId: ChainId.ARB,
      //   chainKey: ChainKey.ARB,
      //   key: CoinKey.ETH,
      //   name: CoinKey.ETH,
      //   logoURI: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      // },
      [ChainKey.ONE]: {
        id: '0x6983d1e6def3690c4d616b13597a09e6193ea013',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },

      // Testnets
      [ChainKey.ROP]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.ROP,
        chainKey: ChainKey.ROP,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.RIN]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.RIN,
        chainKey: ChainKey.RIN,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.GOR]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.GOR,
        chainKey: ChainKey.GOR,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.KOV]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.KOV,
        chainKey: ChainKey.KOV,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.ONET]: {
        id: '0x268d6ff391b41b36a13b1693bd25f87fb4e4b392',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.ONET,
        chainKey: ChainKey.ONET,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.BSCT]: {
        id: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.BSCT,
        chainKey: ChainKey.BSCT,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.OPTT]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.OPTT,
        chainKey: ChainKey.OPTT,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.ARBT]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.ARBT,
        chainKey: ChainKey.ARBT,
        key: CoinKey.ETH,
        name: CoinKey.ETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
    },
  },
  // > MATIC
  {
    key: CoinKey.MATIC,
    name: CoinKey.MATIC,
    logoURI: 'https://etherscan.io/token/images/matictoken_28.png',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
        symbol: CoinKey.MATIC,
        decimals: 18,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.MATIC,
        name: CoinKey.MATIC,
        logoURI: 'https://etherscan.io/token/images/matictoken_28.png',
      },
      [ChainKey.BSC]: {
        id: '0xa90cb47c72f2c7e4411e781772735d9317d08dd4',
        symbol: CoinKey.MATIC,
        decimals: 8,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.MATIC,
        name: CoinKey.MATIC,
        logoURI: 'https://etherscan.io/token/images/matictoken_28.png',
      },
      [ChainKey.POL]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.MATIC,
        decimals: 18,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.MATIC,
        name: CoinKey.MATIC,
        logoURI: 'https://etherscan.io/token/images/matictoken_28.png',
      },
      [ChainKey.DAI]: {
        id: '0x7122d7661c4564b7c6cd4878b06766489a6028a2',
        symbol: CoinKey.MATIC,
        decimals: 18,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.MATIC,
        name: CoinKey.MATIC,
        logoURI: 'https://etherscan.io/token/images/matictoken_28.png',
      },

      // Testnet
      [ChainKey.MUM]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.MATIC,
        decimals: 18,
        chainId: ChainId.MUM,
        chainKey: ChainKey.MUM,
        key: CoinKey.MATIC,
        name: CoinKey.MATIC,
        logoURI: 'https://etherscan.io/token/images/matictoken_28.png',
      },
    },
  },
  // > BNB
  {
    key: CoinKey.BNB,
    name: CoinKey.BNB,
    logoURI:
      'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
        symbol: CoinKey.BNB,
        decimals: 18,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.BNB,
        name: CoinKey.BNB,
        logoURI:
          'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
      },
      [ChainKey.BSC]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.BNB,
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.BNB,
        name: CoinKey.BNB,
        logoURI:
          'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
      },
      [ChainKey.POL]: {
        id: '0xa649325aa7c5093d12d6f98eb4378deae68ce23f',
        symbol: CoinKey.BNB,
        decimals: 18,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.BNB,
        name: CoinKey.BNB,
        logoURI:
          'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
      },
      [ChainKey.DAI]: {
        id: '0xca8d20f3e0144a72c6b5d576e9bd3fd8557e2b04',
        symbol: CoinKey.BNB,
        decimals: 18,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.BNB,
        name: CoinKey.BNB,
        logoURI:
          'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
      },
      [ChainKey.ONE]: {
        id: '0xb1f6e61e1e113625593a22fa6aa94f8052bc39e0',
        symbol: CoinKey.BNB,
        decimals: 18,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.BNB,
        name: CoinKey.BNB,
        logoURI:
          'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
      },

      // Testnet
      [ChainKey.BSCT]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.BNB,
        decimals: 18,
        chainId: ChainId.BSCT,
        chainKey: ChainKey.BSCT,
        key: CoinKey.BNB,
        name: CoinKey.BNB,
        logoURI:
          'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
      },
      [ChainKey.ONET]: {
        id: '0xbef55684b382bae72051813a898d17282066c007',
        symbol: CoinKey.BNB,
        decimals: 18,
        chainId: ChainId.ONET,
        chainKey: ChainKey.ONET,
        key: CoinKey.BNB,
        name: CoinKey.BNB,
        logoURI:
          'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
      },
    },
  },
  // > DAI
  {
    key: CoinKey.DAI,
    name: CoinKey.DAI,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0x6b175474e89094c44da98b954eedeac495271d0f',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.BSC]: {
        id: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.POL]: {
        id: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.DAI]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.OPT]: {
        id: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.OPT,
        chainKey: ChainKey.OPT,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.FTM]: {
        id: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
        symbol: CoinKey.DAI,
        decimals: 18, // TODO: check
        chainId: ChainId.FTM,
        chainKey: ChainKey.FTM,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.ONE]: {
        id: '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.AVA]: {
        id: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.ARB]: {
        id: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },

      // Testnets
      [ChainKey.ROP]: {
        id: '0x31f42841c2db5173425b5223809cf3a38fede360', // on para 0xaD6D458402F60fD3Bd25163575031ACDce07538D, on faucet 0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.ROP,
        chainKey: ChainKey.ROP,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.RIN]: {
        id: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.RIN,
        chainKey: ChainKey.RIN,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.GOR]: {
        id: '0xdc31ee1784292379fbb2964b3b9c4124d8f89c60', // other: 0xc61ba16e864efbd06a9fe30aab39d18b8f63710a'
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.GOR,
        chainKey: ChainKey.GOR,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.KOV]: {
        id: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa', // other: 0xc61ba16e864efbd06a9fe30aab39d18b8f63710a'
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.KOV,
        chainKey: ChainKey.KOV,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      [ChainKey.MUM]: {
        id: '0xb224913CE3851b0a0d7C0FB461eEF40f2e31ddb8',
        symbol: CoinKey.DAI,
        decimals: 18,
        chainId: ChainId.MUM,
        chainKey: ChainKey.MUM,
        key: CoinKey.DAI,
        name: CoinKey.DAI,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
      },
      // 42, 0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa, 18
    },
  },
  // > FTM
  {
    key: CoinKey.FTM,
    name: CoinKey.FTM,
    logoURI: 'https://assets.spookyswap.finance/tokens/FTM.png',
    verified: true,
    chains: {
      [ChainKey.FTM]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.FTM,
        decimals: 18, // check
        chainId: ChainId.FTM,
        chainKey: ChainKey.FTM,
        key: CoinKey.FTM,
        name: CoinKey.FTM,
        logoURI: 'https://assets.spookyswap.finance/tokens/FTM.png',
      },
    },
  },
  // > OKT
  {
    key: CoinKey.OKT,
    name: CoinKey.OKT,
    logoURI:
      'https://static.debank.com/image/okt_token/logo_url/okt/1228cd92320b3d33769bd08eecfb5391.png',
    verified: true,
    chains: {
      [ChainKey.OKT]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.OKT,
        decimals: 18, // check
        chainId: ChainId.OKT,
        chainKey: ChainKey.OKT,
        key: CoinKey.OKT,
        name: CoinKey.OKT,
        logoURI:
          'https://static.debank.com/image/okt_token/logo_url/okt/1228cd92320b3d33769bd08eecfb5391.png',
      },
    },
  },
  // > AVAX
  {
    key: CoinKey.AVAX,
    name: CoinKey.AVAX,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
    verified: true,
    chains: {
      [ChainKey.AVA]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.AVAX,
        decimals: 18, // check
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.AVAX,
        name: CoinKey.AVAX,
        logoURI:
          'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
      },
    },
  },
  // > HT
  {
    key: CoinKey.HT,
    name: CoinKey.HT,
    logoURI:
      'https://static.debank.com/image/heco_token/logo_url/heco/c399dcddde07e1944c4dd8f922832b53.png',
    verified: true,
    chains: {
      [ChainKey.HEC]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.HT,
        decimals: 18,
        chainId: ChainId.HEC,
        chainKey: ChainKey.HEC,
        key: CoinKey.HT,
        name: CoinKey.HT,
        logoURI:
          'https://static.debank.com/image/heco_token/logo_url/heco/c399dcddde07e1944c4dd8f922832b53.png',
      },
    },
  },
  // > ONE
  {
    key: CoinKey.ONE,
    name: CoinKey.ONE,
    logoURI: 'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/WONE.png',
    verified: true,
    chains: {
      [ChainKey.ONE]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ONE,
        decimals: 18,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.ONE,
        name: CoinKey.ONE,
        logoURI:
          'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/WONE.png',
      },
      [ChainKey.BSC]: {
        id: '0x03ff0ff224f904be3118461335064bb48df47938',
        symbol: CoinKey.ONE,
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.ONE,
        name: CoinKey.ONE,
        logoURI:
          'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/WONE.png',
      },

      // Testnet
      [ChainKey.ONET]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.ONE,
        decimals: 18,
        chainId: ChainId.ONET,
        chainKey: ChainKey.ONET,
        key: CoinKey.ONE,
        name: CoinKey.ONE,
        logoURI:
          'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/WONE.png',
      },
    },
  },
  // > FSN
  {
    key: CoinKey.FSN,
    name: CoinKey.FSN,
    logoURI: 'https://www.bscscan.com/token/images/anyFSN_32.png',
    verified: true,
    chains: {
      [ChainKey.FSN]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.FSN,
        decimals: 18,
        chainId: ChainId.FSN,
        chainKey: ChainKey.FSN,
        key: CoinKey.FSN,
        name: CoinKey.FSN,
        logoURI: 'https://www.bscscan.com/token/images/anyFSN_32.png',
      },
    },
  },
  // > MOVR
  {
    key: CoinKey.MOVR,
    name: CoinKey.MOVR,
    logoURI: 'https://assets.coingecko.com/coins/images/17984/small/9285.png',
    verified: true,
    chains: {
      [ChainKey.MOR]: {
        id: '0x0000000000000000000000000000000000000000',
        symbol: CoinKey.MOVR,
        decimals: 18,
        chainId: ChainId.MOR,
        chainKey: ChainKey.MOR,
        key: CoinKey.MOVR,
        name: CoinKey.MOVR,
        logoURI:
          'https://assets.coingecko.com/coins/images/17984/small/9285.png',
      },
    },
  },

  // OTHER STABLECOINS
  // USDT
  {
    key: CoinKey.USDT,
    name: CoinKey.USDT,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.BSC]: {
        id: '0x55d398326f99059ff775485246999027b3197955',
        symbol: CoinKey.USDT,
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.POL]: {
        id: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.DAI]: {
        id: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.OPT]: {
        id: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.OPT,
        chainKey: ChainKey.OPT,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.FTM]: {
        id: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
        symbol: CoinKey.USDT,
        decimals: 6, // TODO: check
        chainId: ChainId.FTM,
        chainKey: ChainKey.FTM,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.ARB]: {
        id: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.OPT]: {
        id: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.OPT,
        chainKey: ChainKey.OPT,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.ONE]: {
        id: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.AVA]: {
        id: '0xc7198437980c041c805a1edcba50c1ce5db95118',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.MOR]: {
        id: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.MOR,
        chainKey: ChainKey.MOR,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },

      // Testnets
      [ChainKey.ROP]: {
        id: '0x110a13fc3efe6a245b50102d2d79b3e76125ae83',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.ROP,
        chainKey: ChainKey.ROP,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.RIN]: {
        id: '0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.RIN,
        chainKey: ChainKey.RIN,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
      [ChainKey.KOV]: {
        id: '0x07de306FF27a2B630B1141956844eB1552B956B5',
        symbol: CoinKey.USDT,
        decimals: 6,
        chainId: ChainId.KOV,
        chainKey: ChainKey.KOV,
        key: CoinKey.USDT,
        name: CoinKey.USDT,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
      },
    },
  },
  // USDC
  {
    key: CoinKey.USDC,
    name: CoinKey.USDC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.BSC]: {
        id: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        symbol: CoinKey.USDC,
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.POL]: {
        id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.DAI]: {
        id: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.OPT]: {
        id: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.OPT,
        chainKey: ChainKey.OPT,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.FTM]: {
        id: '0x04068da6c83afcfa0e13ba15a6696662335d5b75',
        symbol: CoinKey.USDC,
        decimals: 6, // Check
        chainId: 250,
        chainKey: ChainKey.FTM,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.ARB]: {
        id: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.OPT]: {
        id: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.OPT,
        chainKey: ChainKey.OPT,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.ONE]: {
        id: '0x985458e523db3d53125813ed68c274899e9dfab4',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.AVA]: {
        id: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.MOR]: {
        id: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.MOR,
        chainKey: ChainKey.MOR,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },

      // Testnets
      [ChainKey.ROP]: {
        id: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.ROP,
        chainKey: ChainKey.ROP,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.RIN]: {
        id: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.RIN,
        chainKey: ChainKey.RIN,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.GOR]: {
        id: '0xd87ba7a50b2e7e660f678a895e4b72e7cb4ccd9c',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.GOR,
        chainKey: ChainKey.GOR,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      [ChainKey.MUM]: {
        id: '0x6D4dd09982853F08d9966aC3cA4Eb5885F16f2b2',
        symbol: CoinKey.USDC,
        decimals: 6,
        chainId: ChainId.MUM,
        chainKey: ChainKey.MUM,
        key: CoinKey.USDC,
        name: CoinKey.USDC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
      },
      // 42, 0xb7a4f3e9097c08da09517b5ab877f7a917224ede, 6
    },
  },

  // TEST COIN
  {
    key: CoinKey.TEST,
    name: CoinKey.TEST,
    logoURI: 'https://xpollinate.io/icon192.png',
    verified: false,
    chains: {
      [ChainKey.ROP]: {
        id: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        symbol: CoinKey.TEST,
        decimals: 18,
        chainId: ChainId.ROP,
        chainKey: ChainKey.ROP,
        key: CoinKey.TEST,
        name: CoinKey.TEST,
        logoURI: 'https://xpollinate.io/icon192.png',
      },
      [ChainKey.RIN]: {
        id: '0x9ac2c46d7acc21c881154d57c0dc1c55a3139198',
        symbol: CoinKey.TEST,
        decimals: 18,
        chainId: ChainId.RIN,
        chainKey: ChainKey.RIN,
        key: CoinKey.TEST,
        name: CoinKey.TEST,
        logoURI: 'https://xpollinate.io/icon192.png',
      },
      [ChainKey.GOR]: {
        id: '0x8a1cad3703e0beae0e0237369b4fcd04228d1682',
        symbol: CoinKey.TEST,
        decimals: 18,
        chainId: ChainId.GOR,
        chainKey: ChainKey.GOR,
        key: CoinKey.TEST,
        name: CoinKey.TEST,
        logoURI: 'https://xpollinate.io/icon192.png',
      },
      [ChainKey.MUM]: {
        id: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        symbol: CoinKey.TEST,
        decimals: 18,
        chainId: ChainId.MUM,
        chainKey: ChainKey.MUM,
        key: CoinKey.TEST,
        name: CoinKey.TEST,
        logoURI: 'https://xpollinate.io/icon192.png',
      },
      [ChainKey.ARBT]: {
        id: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        symbol: CoinKey.TEST,
        decimals: 18,
        chainId: ChainId.ARBT,
        chainKey: ChainKey.ARBT,
        key: CoinKey.TEST,
        name: CoinKey.TEST,
        logoURI: 'https://xpollinate.io/icon192.png',
      },
      [ChainKey.BSCT]: {
        id: '0xd86bcb7d85163fbc81756bb9cc22225d6abccadb',
        symbol: CoinKey.TEST,
        decimals: 18,
        chainId: ChainId.BSCT,
        chainKey: ChainKey.BSCT,
        key: CoinKey.TEST,
        name: CoinKey.TEST,
        logoURI: 'https://xpollinate.io/icon192.png',
      },
      [ChainKey.OPTT]: {
        id: '0xe71678794fff8846bff855f716b0ce9d9a78e844',
        symbol: CoinKey.TEST,
        decimals: 18,
        chainId: ChainId.OPTT,
        chainKey: ChainKey.OPTT,
        key: CoinKey.TEST,
        name: CoinKey.TEST,
        logoURI: 'https://xpollinate.io/icon192.png',
      },
    },
  },

  // > WBTC
  {
    key: CoinKey.WBTC,
    name: CoinKey.WBTC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
      [ChainKey.POL]: {
        id: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
      [ChainKey.DAI]: {
        id: '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
      [ChainKey.FTM]: {
        id: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.FTM,
        chainKey: ChainKey.FTM,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
      [ChainKey.OPT]: {
        // guessed from debank api
        id: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.OPT,
        chainKey: ChainKey.OPT,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
      [ChainKey.AVA]: {
        // guessed from debank api
        id: '0x50b7545627a5162F82A992c33b87aDc75187B218',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
      [ChainKey.ARB]: {
        id: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
      [ChainKey.ONE]: {
        id: '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
        symbol: CoinKey.WBTC,
        decimals: 8,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.WBTC,
        name: CoinKey.WBTC,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
      },
    },
  },

  // > WETH
  {
    key: CoinKey.WETH,
    name: CoinKey.WETH,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: true,
    chains: {
      [ChainKey.DAI]: {
        id: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
        symbol: CoinKey.ETH,
        decimals: 18,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.FTM]: {
        id: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
        symbol: CoinKey.WETH,
        decimals: 18,
        chainId: ChainId.FTM,
        chainKey: ChainKey.FTM,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.AVA]: {
        // guessed from debank api
        id: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
        symbol: CoinKey.WETH,
        decimals: 18,
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.ARB]: {
        id: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
        symbol: 'WETH',
        decimals: 18,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.ROP]: {
        id: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        symbol: 'WETH',
        decimals: 18,
        chainId: ChainId.ROP,
        chainKey: ChainKey.ROP,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.RIN]: {
        id: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
        symbol: 'WETH',
        decimals: 18,
        chainId: ChainId.RIN,
        chainKey: ChainKey.RIN,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.GOR]: {
        id: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
        symbol: 'WETH',
        decimals: 18,
        chainId: ChainId.GOR,
        chainKey: ChainKey.GOR,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
      [ChainKey.KOV]: {
        id: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        symbol: 'WETH',
        decimals: 18,
        chainId: ChainId.GOR,
        chainKey: ChainKey.GOR,
        key: CoinKey.WETH,
        name: CoinKey.WETH,
        logoURI:
          'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      },
    },
  },

  // > SUSHI
  {
    key: CoinKey.SUSHI,
    name: CoinKey.SUSHI,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    verified: true,
    chains: {
      [ChainKey.ETH]: {
        id: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.ETH,
        chainKey: ChainKey.ETH,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
      [ChainKey.POL]: {
        id: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.POL,
        chainKey: ChainKey.POL,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
      [ChainKey.BSC]: {
        id: '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.BSC,
        chainKey: ChainKey.BSC,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
      [ChainKey.DAI]: {
        id: '0x2995D1317DcD4f0aB89f4AE60F3f020A4F17C7CE',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.DAI,
        chainKey: ChainKey.DAI,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
      [ChainKey.FTM]: {
        id: '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.FTM,
        chainKey: ChainKey.FTM,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
      [ChainKey.AVA]: {
        // guessed from debank api
        id: '0x37B608519F91f70F2EeB0e5Ed9AF4061722e4F76',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.AVA,
        chainKey: ChainKey.AVA,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
      [ChainKey.ARB]: {
        id: '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.ARB,
        chainKey: ChainKey.ARB,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
      [ChainKey.ONE]: {
        id: '0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A',
        symbol: CoinKey.SUSHI,
        decimals: 18,
        chainId: ChainId.ONE,
        chainKey: ChainKey.ONE,
        key: CoinKey.SUSHI,
        name: CoinKey.SUSHI,
        logoURI:
          'https://raw.githubusercontent.com/sushiswapclassic/token-list/master/assets/sushi_logo.png',
      },
    },
  },
]

// Wrapped version of gas on chain
export const wrappedTokens: { [ChainKey: string]: Token } = {
  [ChainKey.ETH]: {
    // https://ww7.etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
    id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ETH,
    chainKey: ChainKey.ETH,
    key: 'WETH' as CoinKey,
    name: 'WETH',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.BSC]: {
    // https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
    id: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    symbol: 'WBNB',
    decimals: 18,
    chainId: ChainId.BSC,
    chainKey: ChainKey.BSC,
    key: 'WBNB' as CoinKey,
    name: 'WBNB',
    logoURI:
      'https://zapper.fi/images/networks/binance-smart-chain/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.POL]: {
    // https://polygonscan.com/token/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270
    id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    symbol: 'WMATIC',
    decimals: 18,
    chainId: ChainId.POL,
    chainKey: ChainKey.POL,
    key: 'WMATIC' as CoinKey,
    name: 'WMATIC',
    logoURI:
      'https://zapper.fi/images/networks/polygon/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.DAI]: {
    // https://blockscout.com/xdai/mainnet/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d
    id: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    symbol: 'WXDAI',
    decimals: 18,
    chainId: ChainId.DAI,
    chainKey: ChainKey.DAI,
    key: 'WXDAI' as CoinKey,
    name: 'WXDAI',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x6b175474e89094c44da98b954eedeac495271d0f.png',
  },
  [ChainKey.OPT]: {
    // https://optimistic.etherscan.io/token/0x4200000000000000000000000000000000000006
    id: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 8,
    chainId: ChainId.OPT,
    chainKey: ChainKey.OPT,
    key: 'WETH' as CoinKey,
    name: 'Wrapped ETH',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.FTM]: {
    //
    id: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    symbol: 'wFTM',
    decimals: 18,
    chainId: ChainId.FTM,
    chainKey: ChainKey.FTM,
    key: 'wFTM' as CoinKey,
    name: 'wFTM',
    logoURI:
      'https://assets.spookyswap.finance/coins/0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83.png',
  },
  [ChainKey.ONE]: {
    id: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    symbol: 'WONE',
    decimals: 18,
    chainId: ChainId.ONE,
    chainKey: ChainKey.ONE,
    key: 'WONE' as CoinKey,
    name: 'WRAPPED ONE',
    logoURI: 'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/WONE.png',
  },
  [ChainKey.AVA]: {
    id: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    symbol: 'WAVAX',
    decimals: 18,
    chainId: ChainId.AVA,
    chainKey: ChainKey.AVA,
    key: 'WAVAX' as CoinKey,
    name: 'Wrapped AVAX',
    logoURI: '',
  },
  [ChainKey.ARB]: {
    id: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ARB,
    chainKey: ChainKey.ARB,
    key: 'WETH' as CoinKey,
    name: 'WETH',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png',
  },

  [ChainKey.MOR]: {
    id: '0xf50225a84382c74CbdeA10b0c176f71fc3DE0C4d',
    symbol: 'WMOVR',
    decimals: 18,
    chainId: ChainId.MOR,
    chainKey: ChainKey.MOR,
    key: 'WMOVR' as CoinKey,
    name: 'WMOVR',
    logoURI: 'https://assets.coingecko.com/coins/images/17984/small/9285.png',
  },

  // Testnets
  [ChainKey.ROP]: {
    // https://ropsten.etherscan.io/token/0xc778417e063141139fce010982780140aa0cd5ab
    id: '0xc778417e063141139fce010982780140aa0cd5ab',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ROP,
    chainKey: ChainKey.ROP,
    key: 'WETH' as CoinKey,
    name: 'WETH',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.RIN]: {
    // https://rinkeby.etherscan.io/token/0xc778417e063141139fce010982780140aa0cd5ab
    id: '0xc778417e063141139fce010982780140aa0cd5ab',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.RIN,
    chainKey: ChainKey.RIN,
    key: 'WETH' as CoinKey,
    name: 'WETH',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.GOR]: {
    // https://goerli.etherscan.io/token/0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6
    id: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.GOR,
    chainKey: ChainKey.GOR,
    key: 'WETH' as CoinKey,
    name: 'WETH',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.KOV]: {
    // https://kovan.etherscan.io/address/0xd0a1e359811322d97991e03f863a0c30c2cf029c
    id: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.KOV,
    chainKey: ChainKey.KOV,
    key: 'WETH' as CoinKey,
    name: 'WETH',
    logoURI:
      'https://zapper.fi/images/networks/ethereum/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.MUM]: {
    // https://mumbai.polygonscan.com/token/0x9c3c9283d3e44854697cd22d3faa240cfb032889
    id: '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
    symbol: 'WMATIC',
    decimals: 18,
    chainId: ChainId.MUM,
    chainKey: ChainKey.MUM,
    key: 'WMATIC' as CoinKey,
    name: 'WMATIC',
    logoURI:
      'https://zapper.fi/images/networks/polygon/0x0000000000000000000000000000000000000000.png',
  },
  [ChainKey.ONET]: {
    id: '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
    symbol: 'WONE',
    decimals: 18,
    chainId: ChainId.ONET,
    chainKey: ChainKey.ONET,
    key: 'WONE' as CoinKey,
    name: 'WRAPPED ONE',
    logoURI: 'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/tokens/WONE.png',
  },
}

export const findDefaultCoin = (coinKey: CoinKey): Coin => {
  const coin = defaultCoins.find((coin) => coin.key === coinKey)
  if (!coin) {
    throw new Error('Invalid Coin')
  }
  return coin
}
export const findDefaultCoinOnChain = (
  coinKey: CoinKey,
  chainKey: ChainKey
): Token => {
  const coin = findDefaultCoin(coinKey)
  const token = coin.chains[chainKey]
  if (!token) {
    throw new Error(`Invalid chain ${chainKey} to coin ${coinKey}`)
  }
  return token
}

export const findWrappedGasOnChain = (chainKey: ChainKey): Token => {
  const token = wrappedTokens[chainKey]
  if (!token) {
    throw new Error(`Wrapped Gas Token not defined for chain ${chainKey}.`)
  }
  return token
}

export const findTokenByChainIdAndAddress = (
  chainId: number,
  tokenAddress: string
): Token | null => {
  let token: Token | null = null

  defaultCoins.forEach((coin) => {
    Object.values(coin.chains).forEach((coinToken: Token) => {
      if (coinToken.chainId === chainId && coinToken.id === tokenAddress) {
        token = coinToken
      }
    })
  })

  return token
}
