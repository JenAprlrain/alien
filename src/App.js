import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import{light} from './styles/Themes'
import styled from 'styled-components';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei';
import Hero from './Components/sections/Hero';
import About from './Components/sections/about';

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Web3 from 'web3';
import './App.css';
import alien from './images/alien1.png';
import planet1Image from './images/planet1.png';
import planet2Image from './images/planet2.png';
import planet3Image from './images/planet3.png';
import logo from './images/logo.jpg';
import NFTABI from './contracts/NFTABI.json';

const MintSite = () => {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mintedTokenIds, setMintedTokenIds] = useState([]);
  const [totalSupply, setTotalSupply] = useState(0);


  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const contractAddress = '0xE6658Ec41bEf9965FD69F193fB8FDe7E31408681';
          const abi = NFTABI;
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
    const onlyWhitelisted = false; // Set this value based on your contract
    const preSaleCost = 0.2; // Set this value based on your contract
    const cost = 0.5; // Set this value based on your contract
   // Calculate the amount of Ether required based on the selected quantity
  const _mintAmount = quantity;
  const requiredAmount = onlyWhitelisted ? preSaleCost * _mintAmount : cost * _mintAmount;

    // Convert the required amount to Wei
    const payableAmount = web3.utils.toWei(requiredAmount.toString(), "ether");

    try {
      const tokenIdsToMint = [];
      for (let i = 0; i < quantity; i++) {
        const mintResult = await contract.methods.mint(quantity).send({
          from: account,value: payableAmount,gas: 3000000,
        });
        const mintedTokenId = mintResult.events.Transfer.returnValues.tokenId;
        tokenIdsToMint.push(mintedTokenId);
      }
      setMintedTokenIds(tokenIdsToMint);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("starting get total supply");
    async function getTotalSupply() {
      if (contract) {
        const supply = await contract.methods.totalSupply().call();
        console.log("Total supply:", supply);
        setTotalSupply(supply);
      }
    }
    getTotalSupply();
  }, [contract]);


  const maxSupply =100




  return (
    <div className="page-container">
      <Hero />
      <div className="title">
      </div>
      <div className="connect-wallet">
        <button onClick={handleConnectWallet}>Connect Wallet</button>
        <p>Connected Account: {account && `${account.slice(0, 6)}...${account.slice(-4)}`}</p>
      </div>
      <div className="mint-section">
        <img src={alien} alt="Alien" style={{ width: '50%', height: '50%', padding: '20px 0', marginTop: '20px' }} />
        <h2>Mint Alien NFT</h2>
        <p> {totalSupply} out of {maxSupply} minted</p>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <div className="slider-container">
            <div className="slider-button minus" onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
              <i className="fas fa-minus"></i>
            </div>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            <div className="slider-button plus" onClick={() => setQuantity(Math.min(quantity + 1, 10))}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <button onClick={handleMint}>Mint</button>
        <h2>Mint price: 0.5 FTM</h2>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div className="planet-info">
          <h2>Stake your Alien to mine for $ZONK. Explore different planets for increased emissions.</h2>
        </div>
        <div className="planets">
          <div className="planet">
            <Link to="/staking">
              <img src={planet1Image} alt="Planet 1" style={{ width: '50%', height: '70%' }} />
            </Link>
            <h3>Planet 1</h3>
          </div>
          <div className="planet">
            <img src={planet2Image} alt="Planet 2" style={{ width: '70%', height: '70%' }} />
            <h3>Planet 2</h3>
          </div>
          <div className="planet">
            <img src={planet3Image} alt="Planet 3" style={{ width: '50%', height: '70%' }} />
            <h3>Planet 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MintSite