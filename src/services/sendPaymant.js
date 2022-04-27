import { ethers } from 'ethers';

export const startPayment = async ({ setError , setTxs, ether, addr}) => {
    try{
        if(!window.ethereum) throw new Error('No Crypto wallet found. Please install it.');
        
        await window.ethereum.send('eth_requestAccounts');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // check address
        ethers.utils.getAddress(addr);
        
        // create a transaction
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether)
        });

        setTxs([tx])
    }
    catch(err){
        console.log(err)
        setError(err.message)
    }
}