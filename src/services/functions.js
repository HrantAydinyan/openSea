const testnetURL = process.env.REACT_APP_TESTNET;

export async function getAccount(){
    try{
        const ethereum = window.ethereum
        if(ethereum){
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts)
            return accounts
         }
    }catch(err){
      console.log(err)
    }
  }
  
export async function getAsset(){
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch(`${testnetURL}/assets?order_direction=desc&limit=20&include_orders=false`, options)
        .then(response => response.json())
        .then(response => console.log(response))
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

export function getSingleAsset(){
    
}