import React, {useMemo, useState} from 'react';
import './App.css';
import {BarChart} from "./BarChart";


function shuffle(arr: number[]) {
  return arr.sort(() => Math.random() - 0.5);
}

const arr = [1, 2, 3, 4, 5, 6]
const LOOP = 100
const LEN = LOOP * arr.length
const firstDice: number[] = []
const secondDice: number[] = []

for (let i = 0; i < LOOP; i++) {
  firstDice.push(...shuffle(arr))
  secondDice.push(...shuffle(arr))
}

const statistic: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < LEN; i++) {
  const v = firstDice[i] + secondDice[i]
  console.log(v)
  statistic[v] = statistic[v] + 1
}

console.log(statistic)

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(prev => {
      let next = prev + 1
      if (next >= LEN) {
        next = 0
      }
      return next;
    })
  }

  return (
    <div className="App"
         style={{
           padding: '30px',
           height: "100vh",
           background: "#001b60"
         }}
         onClick={handleClick}>
      <div style={{ color: "wheat" }}>{`${LEN} 회`}</div>
      <BarChart arr={statistic} />
      <div style={{
        marginTop: '30px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src={`images/dice${firstDice[index]}.png`} style={{ marginRight: "20px" }} />
        <img src={`images/dice${secondDice[index]}.png`} />
      </div>


    </div>
  );
}


export default App;
