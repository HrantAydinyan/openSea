import React from 'react';
import { Link } from 'react-router-dom';

const Asset = ({item, singlePage}) => {
    const {permalink, image_url, name, asset_contract, token_id, description} = item;
    const {image_url: contract_image_url, name: contract_name, address} = asset_contract;

    return (
        <div 
            style={{    
                width: '200px',
                padding: '15px',
                textAlign: 'center'
            }}
        >
            <Link 
                
                to={`/asset/${address}/${token_id}`}
            >
                <img src={image_url ?? contract_image_url} alt="asset_img" style={{width: '150px',height: '150px', objectFit:'cover'}}/>
            </Link>
            <div>
                <a href={permalink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} >{name ?? contract_name}</a>
                {singlePage && <p>{description}</p>}
            </div>
        </div>
    )
}

export default Asset