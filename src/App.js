import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SingleAsset from './components/pages/SingleAsset';
import Header from './components/elements/Header';
import SendTransactions from './components/pages/SendTransactions';
// import * as opensea from 'opensea-js'
import Web3Provider from 'web3';

function App() {
  console.log(window.Buffer)
    return (
    <div className="App">
        <Header />
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/asset/:asset_contract_address/:token_id' element={<SingleAsset />} />
            <Route path='/send' element={<SendTransactions />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;


