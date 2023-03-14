import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';
import alien from './images/alien1.png';
import planet1Image from './images/planet1.png';
import planet2Image from './images/planet2.png';
import planet3Image from './images/planet3.png';

const MintSite = () => {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mintedTokenIds, setMintedTokenIds] = useState([]);

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const contractAddress = 'CONTRACT_ADDRESS_HERE';
          const abi = 'CONTRACT_ABI_HERE';
          const contractInstance = new web3Instance.eth.Contract(abi, contractAddress);
          setContract(contractInstance);

          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Please install MetaMask');
      }
    };
    initializeWeb3();
  }, []);

  const handleConnectWallet = async () => {
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMint = async () => {
    try {
      const tokenIdsToMint = [];
      for (let i = 0; i < quantity; i++) {
        const mintResult = await contract.methods.mint().send({
          from: account,
        });
        const mintedTokenId = mintResult.events.Transfer.returnValues.tokenId;
        tokenIdsToMint.push(mintedTokenId);
      }
      setMintedTokenIds(tokenIdsToMint);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page-container">
      <div className="title">
  <h1 style={{color: "#39ff14", fontSize: "4rem", fontFamily: "Alien Encounters"}}>The Alien Project</h1>
</div>
      <div className="connect-wallet">
        <button onClick={handleConnectWallet}>Connect Wallet</button>
        <p>Connected Account: {account && `${account.slice(0, 6)}...${account.slice(-4)}`}</p>
      </div>
      {web3 && (
    <div className="mint-section">
      <img src={alien} alt="Alien" style={{ width: '50%', height: '50%', padding: '20px 0', marginTop: '20px' }} />
      <h2>Mint Alien NFT</h2>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <div className="slider-container">
          <div className="slider-button minus" onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
            <i className="fas fa-minus"></i>
          </div>
          <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <div className="slider-button plus" onClick={() => setQuantity(Math.min(quantity + 1, 10))}>
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
      <button onClick={handleMint}>Mint</button>
      {mintedTokenIds.length > 0 && (
        <div className="mint-results">
          <h3>Minted Token IDs:</h3>
          <ul>
            {mintedTokenIds.map((tokenId) => (
              <li key={tokenId}>{tokenId}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )}
  {web3 && (
    <div>
      <div className="stake-info">
      <h2>Stake your alien to mine for $ZORG. Explore different planets for increased emissions.</h2>
      </div>
      <div className="planets">
        <div className="planet">
          <img src={planet1Image} alt="Planet 1" style={{ width: '50%', height: '70%' }}/>
          <h3>Planet 1</h3>
        </div>
        <div className="planet">
          <img src={planet2Image} alt="Planet 2" style={{ width: '70%', height: '70%' }}/>
          <h3>Planet 2</h3>
        </div>
        <div className="planet">
          <img src={planet3Image} alt="Planet 3" style={{ width: '50%', height: '70%' }}/>
          <h3>Planet 3</h3>
        </div>
      </div>
    </div>
  )}
  
</div>
  );
};

export default MintSite;
