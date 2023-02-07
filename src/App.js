import { Component } from 'react';
import './App.css';
import Tomato from './Tomato';
import Avocado from './Avocado';

export class App extends Component {

  state = {
    show: true
  }
  render() {
    const btnText = this.state.show ? "TOMATO" : "AVOCADO"
  return (
    <div>
    <p>{this.state.show ? <Avocado/> : <Tomato/>}</p>
    <button onClick={() => {this.setState({show: !this.state.show})}}>{btnText}</button>
    </div>
  );
}
}

export default App;
