import React, { useState } from 'react';
import { getAccount, getBalance } from '../../services/functions';

const ConnectWallet = () => {
    const [accountAddress, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);

    const onConnectWallet = async () => {
        const accounts =  await getAccount();
        accountChangedHandler(accounts[0]);
    }

    const accountChangedHandler = (newAccount) => {
        setAccount(newAccount);
        getUserBalance(newAccount.toString())
    }

    const getUserBalance = async (address) => {
        const balance = await getBalance(address);
        setBalance(balance)
    }

    const chainChangedHandler = () => {
        window.location.reload();
    }

    window.ethereum?.on('accountsChanged', accountChangedHandler)

    window.ethereum?.on('chainChanged', chainChangedHandler)
    
    return (
        <div style={{textAlign: 'center', padding: '10px'}} >
                <div>
                    Connection to metamask
                    <div style={{marginTop: '15px'}}>
                        <button onClick={onConnectWallet}>Connect to ethereum</button>
                    </div>
                </div>
                <div style={{marginTop: '15px'}}>    
                    Account address : {accountAddress}
                </div>
                <div style={{marginTop: '15px'}}>    
                    Account balance : {balance}
                </div>
            </div>
    )
}
export default ConnectWallet;