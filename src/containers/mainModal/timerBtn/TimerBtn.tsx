import React, { FC, useEffect, useState } from "react";

import style from "./TimerBtn.module.scss";



const TimerBtn: FC = () => {

  const [timerCheck, setTimerCheck] = useState(true);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    let stopTimer = 59;
    let intervalId = setInterval(function () {
      setTimer(timer => {
        return timer - 1;
      });
      stopTimer = stopTimer - 1;

      if (stopTimer === 0) {
        clearInterval(intervalId);
        setTimerCheck(false);
      }
    }, 1000);
    return (() => {
      clearInterval(intervalId);
    });
  }, [timerCheck]);


  const resetTimer = () => {
    setTimerCheck(true);
    setTimer(59);
  };



  return (
    <>
      {timerCheck ?
        (<button className={` ${style.btn} ${style.btnTimer} `}>
          <div>Отправить снова</div>

          <div>0:{timer}</div>
        </button>
        ) : (
          <button className={` ${style.btn} ${style.btnNotTimer} `} onClick={() => resetTimer()} >Отправить снова</button>)}

    </>
  );
};

export default TimerBtn;