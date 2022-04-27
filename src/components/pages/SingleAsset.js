import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleAsset } from '../../services/functions';
import Asset from '../Asset';

const SingleAsset = () => {
    const [asset, setAsset] = useState(null);
    const {asset_contract_address, token_id} = useParams();

    useEffect(() => {
        if(asset_contract_address && token_id){
            getSingleAsset(asset_contract_address, token_id).then(response => {
                setAsset(response)
            })
        }

    }, [asset_contract_address, token_id])
    if(!asset) return null;

    return ( 
        <div 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Asset item={asset} singlePage/>
        </div>
    )
}

export default SingleAsset