require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name rifle rural equip imitate private equal gesture'; 
let testAccounts = [
"0xdc164843e4b284800992330c3ca03aa191ac2737e12bc12334e79be85c5045e7",
"0xed057bc8662b58f92ffea6826eca365b41256edf604b483479dd77b27787a155",
"0xc8c2d5d2f88837e5d5e44951063177da2406a3d2840de3562e28bd837c31503d",
"0xabbcf907ae40031aa3805a24cf5d359dcead123699f9f7dfbf43d225e9997202",
"0xe652c1f8e00873347d956650c00e4be5df7637783a11762aee8fe8f26eeff823",
"0x1188abcbceb32249d482159e2a10534f2967d3f91d7d25cf92999c69eb599453",
"0x76b5a9ebd0c46dba5f719e9963ee6a952739c56f10937152507be444cae39b08",
"0xfffa12e369bb63e383a4019c1bf82baf4c4123b0ebcb86df4687f3087ef07156",
"0x5353ee59691ba5a61031b41e5c9631a5b6e7424c1554ae769675f1f1b60e49d5",
"0x05713297efdf18f8c40de74eed89403bfedd49ff8d37de368c52d2ae69b29fb0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


