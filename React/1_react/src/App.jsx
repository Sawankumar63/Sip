import React from 'react'
import { useRef } from 'react'

const App = () => {


const inpRef = useRef();



    function nameHandler() {
        console.log("hello")
       // const inp = document.getElementById('inp')
       // console.log(inp.value)
       console.log(inpRef.current.value)
    }
  return (
    <div>
      Hello
      <input 
       onChange={(e)=>{
        console.log(e.target.value)
       }}
       id='inp'
       type='text' 
       placeholder='Enter your name' />
      <button onClick={nameHandler}>Submit</button>
    


     {/* <input 
       ref={inpRef}
       id='inp'
       type='text' 
       placeholder='Enter your name' />
      <button onClick={nameHandler}>Submit</button>
    
     */}
    
    
    </div>
  )
}

export default App
