import React, { useState } from 'react';
import './style.css';

let data = ["","","","","","","","",""];


function TicTacToe() {
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);

    const togle = (e,num) => {
        if(lock)
            return 0;
        if(count%2===0) {
            e.target.innerHTML = `<img src="cross.png" />`;
            data[num] = "x";
            setCount(count+1);
        }
        else {
            e.target.innerHTML = `<img src="zero.png" />`;
            data[num] = "o";
            setCount(count+1);
        }
        checkWin();
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
            won(data[2]);
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
            won(data[5]);
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
            won(data[8]);
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
            won(data[6]);
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
            won(data[7]);
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
            won(data[8]);
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
            won(data[8]);
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
            won(data[6]);
    }

    const won = (winner) => {
        setLock(true);
        if(winner==="x") {
            document.querySelector(".title").innerHTML = `Congratulation: X wins`;
        }
        else {
            document.querySelector(".title").innerHTML = `Congratulation: 0 wins`;
        }
    }

    function handleReset() {
        setLock(false);
        data = ["","","","","","","","",""];
        document.querySelector(".title").innerHTML = `Tic Tac Toe Game In <span> React</span>`;
        document.querySelector("#b0").innerHTML = "";
        document.querySelector("#b1").innerHTML = "";
        document.querySelector("#b2").innerHTML = "";
        document.querySelector("#b3").innerHTML = "";
        document.querySelector("#b4").innerHTML = "";
        document.querySelector("#b5").innerHTML = "";
        document.querySelector("#b6").innerHTML = "";
        document.querySelector("#b7").innerHTML = "";
        document.querySelector("#b8").innerHTML = "";
    }


  return (
    <div className='container'>
      <h1 className='title' >Tic Tac Toe Game In <span> React</span></h1>
      <div className='board'>
        <div className='row1'>
            <div className='box' id="b0" onClick={(e)=>{togle(e,0)}}></div>
            <div className='box' id="b1" onClick={(e)=>{togle(e,1)}}></div>
            <div className='box' id="b2" onClick={(e)=>{togle(e,2)}}></div>
        </div>
        <div className='row2'>
            <div className='box' id="b3" onClick={(e)=>{togle(e,3)}}></div>
            <div className='box' id="b4" onClick={(e)=>{togle(e,4)}}></div>
            <div className='box' id="b5" onClick={(e)=>{togle(e,5)}}></div>
        </div>
        <div className='row3'>
            <div className='box' id="b6" onClick={(e)=>{togle(e,6)}}></div>
            <div className='box' id="b7" onClick={(e)=>{togle(e,7)}}></div>
            <div className='box' id="b8" onClick={(e)=>{togle(e,8)}}></div>
        </div>

      </div>
      <button className='reset' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default TicTacToe
