import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SingleAsset from './components/pages/SingleAsset';
// import * as opensea from 'opensea-js'
// import Web3 from 'web3';

function App() {
    return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/asset/:asset_contract_address/:token_id' element={<SingleAsset />} />
      </Routes>
    </div>
  );
}

export default App;


