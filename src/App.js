import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Coins from './components/Coins';
import News from './components/News';

import './App.css';
const App = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
  }, []);
  
  return (
    <div className={`app ${isLoaded ? 'fade-in animate' : ''}`}>
      <Navbar/>
<News/>

<br />
<br />
<br />
<Coins/>


    </div>
  )
}

export default App;
