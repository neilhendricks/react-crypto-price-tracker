import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Axios from "axios"
import CoinCardComponent from './CoinCardComponent';
//import React from 'react';

function App() {

  const [coinList, setCoinList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(()=> {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
         .then((response)=>{
          setCoinList(response.data.coins)
        })
  }, [])

  const coinSearch = coinList.filter((coin) => {
    return coin.name.includes(searchInput)
  })

  return (
    <div className="App">
      <input type="text"  placeholder='Search crypto' 
             onChange={(event) => {setSearchInput(event.target.value)}}  />

      <div className='cryptoCards'>
        {coinSearch.map((coin)=>{
          return <CoinCardComponent name={coin.name} price={coin.price} icon={coin.icon}/>
        })}
      </div>
    </div>
  );
}

export default App;
