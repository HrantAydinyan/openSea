import { ethers } from "ethers";
const testnetURL = process.env.REACT_APP_TESTNET;

export async function getAccount(){
    try{
        const ethereum = window.ethereum
        if(ethereum){
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts)
            return accounts
         }else{
            alert('You need to install MetaMask')
         }
    }catch(err){
      console.log(err)
    }
}

export async function getBalance(address){
    try{
        const ethereum = window.ethereum
        if(ethereum){
            const balance = await ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
            return ethers.utils.formatEther(balance)
         }else{
             alert('You need to install MetaMask')
         }
    }catch(err){
      console.log(err)
      return null
    }
}
  
export async function getAssets(){
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    return fetch(`${testnetURL}/assets?order_direction=desc&limit=30&include_orders=false`, options)
            .then(response => response.json())
            .catch(err => console.error(err));

}

export async function getCollections(){
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(`${testnetURL}/collections?offset=0&limit=300`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

//  Bundles are groups of items for sale on OpenSea
export function getBundles(){
    const options = {method: 'GET'};

    fetch(`${testnetURL}/bundles?limit=20&offset=0`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
}

export function getSingleAsset(asset_contract_address, token_id){
    const options = {method: 'GET'};

    return fetch(`${testnetURL}/asset/${asset_contract_address}/${token_id}/?include_orders=false`, options)
            .then(response => response.json())
            .catch(err => console.error(err));
}

export function getAssetByAccount(account_address){
    const options = {method: 'GET'};

    return fetch(`${testnetURL}/assets?owner=${account_address}&order_direction=desc&offset=0&limit=10`, options)
            .then(response => response.json())
            .catch(err => console.error(err));

}