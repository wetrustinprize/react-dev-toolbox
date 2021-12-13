import React, { useState } from 'react';

import './App.css'
import ReactDevToolbox, { ToolboxButton, ToolboxIncDec } from './react-dev-toolbox';

const App: React.FC = () => {
  const [coins, setCoins] = useState<number>(0)

  return (
    <div className='container'>
      <h1>React Dev Toolbox</h1>
      <h2>Boilerplate</h2>

      <ReactDevToolbox
        title='Main Page'
      >
        <h1>Coins</h1>
        <ToolboxIncDec
          value={coins}
          setValue={setCoins}
        />
        <ToolboxButton
          label='Reset coins'
          onClick={() => { setCoins(0) }}
          disabled={coins === 0}
        />
      </ReactDevToolbox>
    </div>
  )
}

export default App;