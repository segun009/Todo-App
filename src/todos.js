import React from 'react';

const Todo = ({todoItems, deleteTodo}) => {
  let todolist = todoItems.length ? (
    todoItems.map(todo => {
        return(
            <div className="each-todolist" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
                <span>{todo.item}</span>
            </div>
        )
    })
  ) : (<div className="empty-container">Empty List</div>)
  return(
      <div className="each-todo-container">
          {todolist}
      </div>
  )
}
export default Todo;