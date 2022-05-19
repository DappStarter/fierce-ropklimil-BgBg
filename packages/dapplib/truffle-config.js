require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan rice saddle aspect hockey enter fog subway'; 
let testAccounts = [
"0xba7607801456a9686b869486cacf16d3dd2e75e27a38762ca95ca62a5b278ec2",
"0xa5113e176176605677b7097c44a755dcdcd0b5de7cfe5f7afbf99a01ef925409",
"0xd0f09ad8e58d86bfbb029254a93b70d60ee7d9049f7fe84ef9a1a8f213f712d8",
"0x4effd2faafc3ca89dac022665252578ffb8e1e181f443e059ca11bd0a5f92a8f",
"0x15d4d024f934c06ecd0c7cedc8ec8a262e348db6a45a7208d74978cf43beba43",
"0x2e48ef0c2358340f66d8a61d8b1cb2a4fd16fb1a4e7f2715c93d53f07ba722e7",
"0xef97999814ba7f46c232c4c9b8087d0fae14434e267d51d747d1efdbdb7ab035",
"0x7d428c52f1c556fbf1099909127132b2b2df80c85051db3076b0df94f3067971",
"0xb4db67ac507c125cca4a1635d4777a0586cdad7bb35020d936a5e394a17faf10",
"0x6253b59ddb5a3df1a5c1228bd10fcbd2de6abf847632a9a3eb42c72d95ef8025"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

