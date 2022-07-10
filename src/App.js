import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';

function App() {
  const [pin, setPin] = useState("");
  return (
    <div className="App">
      <Pin length={4} setPin={setPin}></Pin>
      <h3>PIN: {pin}</h3>
    </div>
  );
}

export default App;
