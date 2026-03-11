//url ->>   `https://api.github.com/users/${username}`  

import { useState } from 'react'

import Input from './input.jsx'
import Output from './output.jsx'

import './App.css'

function App(){
  const [fetchData , setfetchData] = useState(false);
  const [username, setUsername] = useState("");
  const [userdata, setUserdata] = useState({});

  const handleclick = async ()=>{
    setfetchData(true);
    try{
      
      let response = await fetch(`https://api.github.com/users/${username}`);
      if(!response.ok)
        throw new Error("Failed to fetch Data. Please try again.");;
      let data = await response.json(); 
      setUserdata(data);
      setUsername("");
    }catch(error){
      alert("Error occured!"+error.message);
    }
  }

  if(!fetchData){
    return(
      <>
        <div className="w-full h-full hexagon-bg"></div>
        <Input username={username} setUsername={setUsername} handleclick={handleclick}/>
        <footer className='fixed bottom-0 left-0 w-full z-[-100] font-black mx-[10px] text-center bg-white'>Built for learning</footer>
      </>
    );
  }
  return(
    <>
      <div className="w-full h-full hexagon-bg"></div>
      <Output username={username} userdata={userdata} handleclick={handleclick} setUsername={setUsername}/>
      <footer className='fixed bottom-0 left-0 w-full z-[-100] font-black mx-[10px] text-center bg-white'>Built for learning</footer>
    </>
  );
  
}

export default App
