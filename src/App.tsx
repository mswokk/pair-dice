import React, {useMemo, useState} from 'react';
import './App.css';
import {BarChart} from "./BarChart";

function shuffle(arr: number[]) {
  return arr.sort(() => Math.random() - 0.5);
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const f1 = [2, 3, 4, 5, 6, 7]
const f2 = [3, 4, 5, 6, 7, 8]
const f3 = [4, 5, 6, 7, 8, 9]
const f4 = [5, 6, 7, 8, 9, 10]
const f5 = [6, 7, 8, 9, 10, 11]
const f6 = [7, 8, 9, 10, 11, 12]

const allCase = [...f1, ...f2, ...f3, ...f4, ...f5, ...f6,]

const LOOP = 100
const LEN = LOOP * allCase.length
const results: number[] = []
for (let i = 0; i < LOOP; i++) {
  results.push(...allCase)
}
shuffle(results)

const statistic: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < LEN; i++) {
  const v = results[i]
  statistic[v] = statistic[v] + 1
}

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

  const v = results[index]

  // 주사위 2개 합쳐서 v 가 되는 숫자
  // 한개당 1~6 범위지만 합에 따라 최소, 최대 숫자가 나뉜다.
  // 12 일때 최소 6, 최대 6 = max(12-6, 1) ~ max = max(6, 12-1)
  // 6 일때 최소 1, 최대 5    max(6-6, 1) ~ min(6-1, 6)
  // 5 일때 최소 1, 최대 4    max(5-6, 1) ~ min(5-1, 6)
  // 2 일때 최소 1, 최대 1    max(2-6, 1) ~ min(2-1, 6)
  let minNum = Math.max(1, v - 6)
  let maxNum = Math.min(6, v - 1)
  const first = getRandomNumber(minNum, maxNum)
  const second = v - first

  return (
    <div className="App"
         style={{
           display: "flex",
           justifyContent: "center",
           flexDirection: 'column',
           alignItems: "center",
           padding: '30px',
           height: "100vh",
           background: "#001b60",
         }}
         onClick={handleClick}>
      <div style={{ color: "wheat" }}>{`${index} / ${LEN} 회`}</div>
      {/*<BarChart arr={statistic} />*/}
      <div style={{
        marginTop: '30px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src={`images/dice${first}.png`} style={{ marginRight: "20px" }} />
        <img src={`images/dice${second}.png`} />
      </div>
      <div style={{ color: "wheat", marginTop: '30px', fontWeight: "bold", fontSize: "20" }}>{v}</div>
    </div>
  );
}


export default App;
