import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps> {
//   state = { counter: 0 }

//   onIncrement = (): void => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   };
//   onDecrement = (): void => {
//     this.setState({
//       counter: this.state.counter - 1
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     )
//   }
// }

const App = (props: AppProps): JSX.Element => {
  return (
    <div>{props.color}</div>
  )
};

ReactDOM.render(<App color="red" />, document.querySelector('#root'));