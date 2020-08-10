import React from 'react'

const Header = () => {
  return(
    <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '45px', background: 'lightgrey', paddingBottom: '44px', color: 'lightcoral'}}>
      <h1 style={{WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize: '3em'}}>Animal Lover</h1>
    </header>
  )
}

export default Header