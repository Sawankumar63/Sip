
import React from 'react'
import Parent from '../props/Parent';
import { createContext } from 'react';

const moneyCountext = createContext();
const blessCountext = createContext();

const App = () => {
  let money = 5000;
  let bless = "blessing";

  return (
    <div>
        I want to give 5000 rupees to my Grand Child and also  some.
        <moneyCountext.Provider value = {money}>
            <blessCountext.Provider value = {bless}>
              <Parent/>
            </blessCountext.Provider>
        </moneyCountext.Provider>

    </div>
  )
}

export default App
export{moneyCountext, blessCountext};
