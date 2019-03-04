import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: [],
      num2: [],
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.sum = this.sum.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.reset = this.reset.bind(this);
  }

  setNum1(e){
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e){
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }

  sum(event) {
    event.preventDefault();
    const one = this.state.num1;
    const two = this.state.num2;
    const sum = one + two;
    this.setState({result: sum});
  }

  subtract(event) {
    event.preventDefault();
    const one = this.state.num1;
    const two = this.state.num2;
    const sum = one - two;
    this.setState({result: sum});
  }

  multiply(event) {
    event.preventDefault();
    const one = this.state.num1;
    const two = this.state.num2;
    const sum = one * two;
    this.setState({result: sum});
  }

  divide(event) {
    event.preventDefault();
    const one = this.state.num1;
    const two = this.state.num2;
    const sum = one / two;
    this.setState({result: sum});
  }

  reset(event) {
    event.preventDefault();
    this.setState({result: 0, num1: [], num2: []})
  }

  render () {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.reset}>Reset!</button>
        <button onClick={this.sum}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <span>The result is: {this.state.result}</span>
      </div>
    );
  }


}

export default Calculator;
