
// rafce

import React from 'react'
import { useState  } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  console.log("Hello")
 // let cnt = 0;

  function decHandler(){
    
    // console.log("cnt pe click hua")
    // cnt++
    // console.log(cnt)

    //count+1;
     if (count > 0) {
      setCount(count - 1);
    }
    console.log(count)
  }
  function incHandler(){
    
    // console.log("cnt pe click hua")
    // cnt++
    // console.log(cnt)

    //count+1;
    setCount(count+1)
    console.log(count)
  }
  return (
    <div>
      {/* hello Sawan, money:{cnt} */}
      Hello Sawan, money:{count}
      <button onClick ={decHandler}> Dec </button>

      <button onClick ={incHandler}> Inc </button>
    </div>
  )
}

export default App
