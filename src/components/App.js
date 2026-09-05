
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = async () => {
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    };
    calculateSum();
  }, [numbers]);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumbers([...numbers, isNaN(value) ? 0 : value]);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={handleChange} />
      <p>Sum: {sum}</p>
    </div>
  )
}

export default App
