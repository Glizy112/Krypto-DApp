// https://eth-ropsten.alchemyapi.io/v2/eHZDeVIkWLYK7Vs1PiRrDjjdWBc6KNyW

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/eHZDeVIkWLYK7Vs1PiRrDjjdWBc6KNyW',
      accounts: [ '2b4dbc9f0881af3264d35834eadb17d2fb2b2b4aed5939c6e2efb3392095d23f' ]
    }
  }
}