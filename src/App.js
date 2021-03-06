import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'takeout trash',
        completed: false
      },
      {
        id: 2,
        title: 'Smile',
        completed: false
      },
      {
        id: 3,
        title: 'Grateful',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.props.todos)
    return (
      <div className="App">
          <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
