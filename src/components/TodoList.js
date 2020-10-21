import React from 'react';
import Todo from './Todo';
import './App.css';

const TodoList = ({ todos, toggleTodo }) => (
  <ul className='thelist'>
   <h5>The List</h5> 
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} todo={todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;