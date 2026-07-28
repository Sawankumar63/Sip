import React from 'react'
import { useContext } from 'react'
import { blessCountext, monyCountext } from '../src/App'

const Grandchild = () => {
    let money =useContext(moneyCountext)
    let blessing = useContext(blessCountext)
  return (
    <div>
        ohh.. Mere dadu ne mujhe <strong>{money}</strong> aur <strong>{blessing}</strong> bhi diya ab mai chinrai karunga
    </div>
  )
}

export default Grandchild
