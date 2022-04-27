import React, {  useEffect, useState } from 'react';
import { getAssets, getBundles, getCollections } from '../../services/functions';
import Asset from '../Asset';
import ConnectWallet from '../shared/ConnectWallet';

const Home = () => {
    const [assets, setAssets] = useState([]);
  
    useEffect(() => {
        getAssets().then(response => {
            const {assets, previous, next } = response;
            setAssets(assets)
        })
    }, [])


    return (
        <>
            <ConnectWallet />
            <button onClick={getCollections}>Get Collections</button>
            <button onClick={getBundles}>Get Bundles</button>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {assets?.map(asset => <Asset key={asset.id} item={asset}/>)}
            </div>
        </>
   )
}

export default Home