import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import HelloReact from './components/HelloReact';
import HelloWorld from './components/HelloWorld';
import Search from './components/Search';

function App() {

  const [counter, setCounter] = useState(0);
  
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <HelloWorld />
      <HelloReact/>
      <Counter value={counter} onDecrease={decrease} onIncrease={increase}/>
      <Search />
    </div>
  );
}

export default App;
