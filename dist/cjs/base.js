"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainId = exports.ChainKey = exports.CoinKey = void 0;
var CoinKey;
(function (CoinKey) {
    CoinKey["ETH"] = "ETH";
    CoinKey["MATIC"] = "MATIC";
    CoinKey["BNB"] = "BNB";
    CoinKey["DAI"] = "DAI";
    CoinKey["FTM"] = "FTM";
    CoinKey["OKT"] = "OKT";
    CoinKey["AVAX"] = "AVAX";
    CoinKey["HT"] = "HT";
    CoinKey["ONE"] = "ONE";
    CoinKey["FSN"] = "FSN";
    CoinKey["MOVR"] = "MOVR";
    CoinKey["EXP"] = "EXP";
    CoinKey["TCH"] = "TCH";
    CoinKey["UBQ"] = "UBQ";
    CoinKey["META"] = "META";
    CoinKey["DIODE"] = "DIODE";
    CoinKey["CELO"] = "CELO";
    CoinKey["FUSE"] = "FUSE";
    CoinKey["TLOS"] = "TLOS";
    CoinKey["CRO"] = "CRO";
    CoinKey["SHIB"] = "SHIB";
    CoinKey["L1"] = "L1";
    CoinKey["RBTC"] = "RBTC";
    CoinKey["TBG"] = "TBG";
    CoinKey["VLX"] = "VLX";
    CoinKey["GLMR"] = "GLMR";
    CoinKey["METIS"] = "METIS";
    CoinKey["SOL"] = "SOL";
    CoinKey["EVM"] = "EVM";
    // Stable coins
    CoinKey["USDT"] = "USDT";
    CoinKey["USDC"] = "USDC";
    CoinKey["cbtUSDC"] = "cbtUSDC";
    CoinKey["cbtUSDT"] = "cbtUSDT";
    CoinKey["cbtWUSDT"] = "cbtWUSDT";
    CoinKey["cbtWUSDC"] = "cbtWUSDC";
    CoinKey["cbtCELR"] = "cbtCELR";
    CoinKey["BUSD"] = "BUSD";
    // Testnet
    CoinKey["TEST"] = "TEST";
    CoinKey["KAL"] = "KAL";
    CoinKey["SDIODE"] = "SDIODE";
    CoinKey["SPARK"] = "SPARK";
    CoinKey["TRBTC"] = "TRBTC";
    CoinKey["CXTT"] = "CXTT";
    // stargate testnet tokens
    CoinKey["sgMETIS"] = "sgMETIS";
    CoinKey["sgWOO"] = "sgWOO";
    CoinKey["sgUSDT"] = "sgUSDT";
    CoinKey["sgBUSD"] = "sgBUSD";
    CoinKey["sgUSDC"] = "sgUSDC";
    // Other tokens
    CoinKey["WBTC"] = "WBTC";
    CoinKey["WETH"] = "WETH";
    CoinKey["SUSHI"] = "SUSHI";
    CoinKey["DODO"] = "DODO";
    CoinKey["MCB"] = "MCB";
    CoinKey["CELR"] = "CELR";
    CoinKey["IF"] = "IF";
})(CoinKey = exports.CoinKey || (exports.CoinKey = {}));
var ChainKey;
(function (ChainKey) {
    ChainKey["ETH"] = "eth";
    ChainKey["POL"] = "pol";
    ChainKey["BSC"] = "bsc";
    ChainKey["DAI"] = "dai";
    ChainKey["OKT"] = "okt";
    ChainKey["FTM"] = "ftm";
    ChainKey["AVA"] = "ava";
    ChainKey["ARB"] = "arb";
    ChainKey["HEC"] = "hec";
    ChainKey["OPT"] = "opt";
    ChainKey["ONE"] = "one";
    ChainKey["FSN"] = "fsn";
    ChainKey["MOR"] = "mor";
    ChainKey["EXP"] = "exp";
    ChainKey["TCH"] = "tch";
    ChainKey["UBQ"] = "ubq";
    ChainKey["MET"] = "met";
    ChainKey["DIO"] = "dio";
    ChainKey["CEL"] = "cel";
    ChainKey["FUS"] = "fus";
    ChainKey["TLO"] = "tlo";
    ChainKey["CRO"] = "cro";
    ChainKey["BOB"] = "bob";
    ChainKey["SHI"] = "shi";
    ChainKey["GL1"] = "gl1";
    ChainKey["RSK"] = "rsk";
    ChainKey["TBW"] = "tbw";
    ChainKey["VEL"] = "vel";
    ChainKey["MOO"] = "moo";
    ChainKey["MAM"] = "mam";
    ChainKey["AUR"] = "aur";
    ChainKey["TER"] = "ter";
    ChainKey["OAS"] = "oas";
    ChainKey["SOL"] = "sol";
    ChainKey["EVM"] = "evm";
    ChainKey["ARN"] = "arn";
    ChainKey["ERA"] = "era";
    ChainKey["PZE"] = "pze";
    // Testnets
    ChainKey["GOR"] = "gor";
    ChainKey["METT"] = "mett";
    ChainKey["DIOT"] = "diot";
    ChainKey["MUM"] = "mum";
    ChainKey["ARBG"] = "arbg";
    ChainKey["OPTG"] = "optg";
    ChainKey["BSCT"] = "bsct";
    ChainKey["HECT"] = "hect";
    ChainKey["ONET"] = "onet";
    ChainKey["FUST"] = "fust";
    ChainKey["TLOT"] = "tlot";
    ChainKey["RSKT"] = "rskt";
    ChainKey["SOLT"] = "solt";
    ChainKey["OAST"] = "oast";
    ChainKey["TERT"] = "tert";
    ChainKey["AVAT"] = "avat";
    ChainKey["EVMT"] = "evmt";
    ChainKey["MORT"] = "mort";
    ChainKey["FTMT"] = "ftmt";
    ChainKey["LNAT"] = "lnat";
})(ChainKey = exports.ChainKey || (exports.ChainKey = {}));
var ChainId;
(function (ChainId) {
    ChainId[ChainId["ETH"] = 1] = "ETH";
    ChainId[ChainId["POL"] = 137] = "POL";
    ChainId[ChainId["BSC"] = 56] = "BSC";
    ChainId[ChainId["DAI"] = 100] = "DAI";
    ChainId[ChainId["OKT"] = 66] = "OKT";
    ChainId[ChainId["FTM"] = 250] = "FTM";
    ChainId[ChainId["AVA"] = 43114] = "AVA";
    ChainId[ChainId["ARB"] = 42161] = "ARB";
    ChainId[ChainId["HEC"] = 128] = "HEC";
    ChainId[ChainId["OPT"] = 10] = "OPT";
    ChainId[ChainId["ONE"] = 1666600000] = "ONE";
    ChainId[ChainId["FSN"] = 32659] = "FSN";
    ChainId[ChainId["MOR"] = 1285] = "MOR";
    ChainId[ChainId["EXP"] = 2] = "EXP";
    ChainId[ChainId["TCH"] = 7] = "TCH";
    ChainId[ChainId["UBQ"] = 8] = "UBQ";
    ChainId[ChainId["MET"] = 11] = "MET";
    ChainId[ChainId["DIO"] = 15] = "DIO";
    ChainId[ChainId["CEL"] = 42220] = "CEL";
    ChainId[ChainId["FUS"] = 122] = "FUS";
    ChainId[ChainId["TLO"] = 40] = "TLO";
    ChainId[ChainId["CRO"] = 25] = "CRO";
    ChainId[ChainId["BOB"] = 288] = "BOB";
    ChainId[ChainId["SHI"] = 27] = "SHI";
    ChainId[ChainId["GL1"] = 29] = "GL1";
    ChainId[ChainId["RSK"] = 30] = "RSK";
    ChainId[ChainId["TBW"] = 35] = "TBW";
    ChainId[ChainId["VEL"] = 106] = "VEL";
    ChainId[ChainId["MOO"] = 1284] = "MOO";
    ChainId[ChainId["MAM"] = 1088] = "MAM";
    ChainId[ChainId["AUR"] = 1313161554] = "AUR";
    ChainId[ChainId["SOL"] = 1151111081099710] = "SOL";
    ChainId[ChainId["TER"] = 1161011141099710] = "TER";
    ChainId[ChainId["OAS"] = 111971151099710] = "OAS";
    ChainId[ChainId["EVM"] = 9001] = "EVM";
    ChainId[ChainId["ARN"] = 42170] = "ARN";
    ChainId[ChainId["ERA"] = 324] = "ERA";
    ChainId[ChainId["PZE"] = 1101] = "PZE";
    // Testnets
    ChainId[ChainId["GOR"] = 5] = "GOR";
    ChainId[ChainId["METT"] = 12] = "METT";
    ChainId[ChainId["DIOT"] = 13] = "DIOT";
    ChainId[ChainId["MUM"] = 80001] = "MUM";
    ChainId[ChainId["ARBG"] = 421613] = "ARBG";
    ChainId[ChainId["OPTG"] = 420] = "OPTG";
    ChainId[ChainId["BSCT"] = 97] = "BSCT";
    ChainId[ChainId["HECT"] = 256] = "HECT";
    ChainId[ChainId["ONET"] = 1666700000] = "ONET";
    ChainId[ChainId["FUST"] = 123] = "FUST";
    ChainId[ChainId["TLOT"] = 41] = "TLOT";
    ChainId[ChainId["RSKT"] = 31] = "RSKT";
    ChainId[ChainId["SOLT"] = 1151111081161011] = "SOLT";
    ChainId[ChainId["TERT"] = 1161011141161011] = "TERT";
    ChainId[ChainId["OAST"] = 1119711511610111] = "OAST";
    ChainId[ChainId["AVAT"] = 43113] = "AVAT";
    ChainId[ChainId["EVMT"] = 9000] = "EVMT";
    ChainId[ChainId["MORT"] = 1287] = "MORT";
    ChainId[ChainId["FTMT"] = 4002] = "FTMT";
    ChainId[ChainId["LNAT"] = 59140] = "LNAT";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
