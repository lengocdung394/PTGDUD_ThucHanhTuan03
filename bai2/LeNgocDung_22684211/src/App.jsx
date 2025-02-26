import { useState } from 'react';
import bai02 from '../image/bai02.jpg';
import './App.css';

function App() {
  const [invest, setInvest] = useState(0);
  const [rate, setRate] = useState(0);
  const [goal, setGoal] = useState(0);
  const [data, setData] = useState([]);

  const style = {
    margin: '50px',
  };

  const style2 = {
    margin: '30px',
  };

  const tableStyle = {
    border: '1px solid black',
    width: '100%',
    textAlign: 'center',
    borderCollapse: 'collapse',
  };

  function OnchangeInvest(e) {
    setInvest(Number(e.target.value) || 0);
  }

  function OnChangeRate(e) {
    setRate(Number(e.target.value) || 0);
  }

  function OnChangeGoal(e) {
    setGoal(Number(e.target.value) || 0);
  }

  function onclick() {
    const currentYear = 2025;
    const newData = [];
    let year = currentYear;
    let currentInvest = invest;
    const currentRate = rate / 100;
    let endyear = currentInvest * (1 + currentRate);

    while (goal > endyear) {
      newData.push({
        year: year,
        invest: currentInvest,
        rate: currentRate,
        goal: goal,
        endYear: endyear,
      });
      year++;
      endyear = currentInvest * Math.pow(1 + currentRate, year - currentYear);
    }

    setData(newData);
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
      <br />
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
              <td>{(row.rate * 100).toFixed(2)}%</td>
              <td>{row.goal}</td>
              <td>{row.endYear.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onclick}>Click</button>
    </>
  );
}

export default App;