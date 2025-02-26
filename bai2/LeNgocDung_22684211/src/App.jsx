import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bai02 from '../image/bai02.jpg';

function App() {
  const [invest, setInvest] = useState(0);
  const [rate, setRate] = useState(0);
  const [goal, setGoal] = useState(0);
  const [data, setData] = useState([]);
  var style = {
    margin: '50px',
  }

  var style2 = {
    margin: '30px',
  }


  const tableStyle = {
    border: '1px solid black',
    width: '100%',
    textAlign: 'center',
    borderCollapse: 'collapse',
  };

function OnchangeInvest(e) {
  setInvest(e.target.value || 0);
}

function OnChangeRate(e) {
  setRate(e.target.value || 0)
}

function OnChangeGoal(e) {
  setGoal(e.target.value || 0)
}
function onclick() {
  let currentAmount = invest;
    const newData = []; // Array to hold yearly data
    let year = 2025; // Starting year

    // Calculate yearly returns until the goal is reached
    while (currentAmount < goal) {
      const interestEarned = currentAmount * (rate / 100); // Calculate interest for the year
      currentAmount += interestEarned; // Update total amount
      
      newData.push({
        year: year++,
        currentAmount: currentAmount.toFixed(2), // Total amount after interest
        interestEarned: interestEarned.toFixed(2), // Interest earned this year
      });
    }

    setData(newData); // Update data state with yearly balances
}

return (
  <>
    <img src={bai02} alt="Description of the image" />
    <div className='input-container'>
      <div>
        <label>Input Your Invest Money:</label>
        <input onChange={OnchangeInvest} type="text" placeholder="Enter your money" />
      </div>

      <div>
        <label style={style}>Input Rate:</label>
        <input onChange={OnChangeRate} type="text" placeholder="Input rate" />

      </div>

      <div>
        <label style={style2}>Input Your Goal:</label>
        <input onChange={OnChangeGoal} type="text" placeholder="Enter goal" />
      </div>
    </div>
    <br>
    </br>
    <br>
    </br>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Invest</th>
          <th>Rate</th>
          <th>Goal</th>
          <th>EndYear</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{row.invest}</td>
            <td>{row.rate}</td>
            <td>{row.goal}</td>
            <td>{row.endYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={onclick}>Click</button>
  </>
)
}

export default App
