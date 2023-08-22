module.exports = [
    // test1
    { source: '/api/:path*', destination: 'http://192.168.66.240:5577/api/:path*' },
    { source: '/connect/:path*', destination: 'http://192.168.66.240:8080/connect/:path*' },

    // test2
    // { source: '/api/:path*', destination: 'http://192.168.67.51:5577/api/:path*' },
    // { source: '/connect/:path*', destination: 'http://192.168.67.51:8080/connect/:path*' },

    // mainnet
    // { source: '/api/:path*', destination: 'https://did-portkey.portkey.finance/api/:path*' },
    // { source: '/connect/:path*', destination: 'https://auth-portkey.portkey.finance/connect/:path*' },

    // testnet
    // { source: '/api/:path*', destination: 'https://did-portkey-test.portkey.finance/api/:path*' },
    // { source: '/connect/:path*', destination: 'https://auth-portkey-test.portkey.finance/connect/:path*' },

];
