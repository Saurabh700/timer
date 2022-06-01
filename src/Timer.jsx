import React, { useState, useEffect } from "react";

const Timer = ({ start, end }) => {
  console.log(start, end);
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      // IMP --> from 1h 15 min to 1h 25 min
      // after just one iteration (timer-1) becomes (99) -> thats why it doesnt reduce further this is known as stale state --> thats why we need to pass (timer-1) inside a function and pass timer as an argument
      //   setTimer(timer - 1); it works on the concept of closures --> timer -1 becomes the argument for next iteration
      if (timer === end) {
        clearInterval(id);
      } else {
        setTimer((timer) => timer + 1);
      }
    }, 1000);
    //   setTimer((timer) => timer - 1);
    // }, 1000);
    return () => {
      // this return is also used when user shut down timer --> then this clearInterval removes it from browser memory
      clearInterval(id); // this is memory cleaning operation -> to reduce memory leak
      //   component  is unmounting
    };
  }, [timer, end]);

  //   but in react we cannot use setInterval like this --> because we cannot openly update our state in react otherwise it will lead to unnecessary rerender which we dont want --> thats why we use setInterval inside useEffect , by passing []
  return <div>Timer : {timer}</div>;
};

export default Timer;
