import React from 'react';
import './App.css';
// import Ball from './Ball';
import Lottery from './Lottery';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Daily" maxNum={10} numBalls={4}/>
        {/* <Ball num={17} />
        <Ball num={13} />
        <Ball num={11} />
        <Ball num={9} /> */}
      </div>
    );
  }
}

export default App;
