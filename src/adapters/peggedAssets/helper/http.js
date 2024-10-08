const retryModule = require('async-retry')

async function retry(func){
    return retryModule(func, {
        retries:3
    })
}

const axios = require("axios")
const COVALENT_KEY = 'ckey_72cd3b74b4a048c9bc671f7c5a6'

async function get(endpoint) {
  return (await retry(async _ => await axios.get(endpoint))).data
}

async function post(endpoint, body) {
  return (await axios.post(endpoint, body)).data
}


async function covalentGetTokens(address, chain = 'ethereum') {
  let chainId
  switch(chain) {
    case 'ethereum': chainId = 1; break;
    default: throw new Error('Missing chain to chain id mapping!!!')
  }
  const {
    data: { items }
  } = await get(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?&key=${COVALENT_KEY}`)
  return items
}

module.exports = {
  get,
  post,
  covalentGetTokens,
}