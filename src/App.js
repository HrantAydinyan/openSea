import './App.css';
import { getAccount, getAsset, getBundles, getCollections } from './services/functions';
import * as opensea from 'opensea-js'
// import Web3 from 'web3';
function App() {
  // var eth = new Eth(Eth.givenProvider || 'localhoste:8546');
  // const Network = opensea.Network;
  // console.log(Network)

  return (
    <div className="App">
      <button onClick={getAccount}>Connect to ethereum</button>
      <button onClick={getAsset}>Get Assets</button>
      <button onClick={getCollections}>Get Collections</button>
      <button onClick={getBundles}>Get Bundles</button>
    </div>
  );
}

export default App;


