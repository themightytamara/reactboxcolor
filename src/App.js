import React from 'react';
import './App.css'
let green = '#39D1B4';
let yellow = '#FFD712';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      count : 0,
      color: green
    }
  }
  handleClick = () => {
    let letters = '0123456789ABCDEF';
    let rainbow = '#';
    for (let i = 0; i < 6; i++ ) {
      rainbow += letters[Math.floor(Math.random() * 16)];
    }
    this.setState(({ count }) => ({
      count: count + 1,
      color: rainbow
    }));
  };
render(){
  return (
    <div className="App">
   <button style={{background: this.state.color}} type="button"
   onClick={this.handleClick}
   >
   Click # {this.state.count}
   </button>
    </div>
  );
}
}
export default App;