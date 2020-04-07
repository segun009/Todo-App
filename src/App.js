import React, {Component} from 'react';
import Todo from './todos';
import AddTodo from './addTodo';
import './todo.css';



class App extends Component {
  state = {
    toDos: [
      {id: 1, item: 'install Editor'},
      {id: 2, item: 'create first react app'}
    ]
  }
  addNew = (todo) => {
    todo.id = Math.random();
    let newTodos = [...this.state.toDos, todo];
    this.setState({
      toDos: newTodos
    })
  }
  deleteTodo = (id) => {
    let newList = this.state.toDos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      toDos: newList
    })
  }
  render() {
    return(
      <div className="todo-container">
       <h2>Todo lists</h2>
       <Todo deleteTodo={this.deleteTodo} todoItems={this.state.toDos} />
       <AddTodo addNew={this.addNew} />
      </div>
    )
  }
}

export default App;
