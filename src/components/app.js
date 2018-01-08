import React from 'react';
import MainComponent from './MainComponent'

function App(props){
  function handleClick() {
    console.log('I was clicked too!');
  }


  return (
    <div>
      <MainComponent name="I am main component again" />
      <button onClick={handleClick}>Hello</button>
    </div>
  );
}

export default App;
