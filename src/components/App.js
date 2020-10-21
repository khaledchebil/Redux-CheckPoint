import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import './App.css';
import 'tachyons';

const App = () => (
  <div className='App'>
    <AddTodo />
    <VisibleTodoList />
    <div className='foot'>
    <Footer />
    </div>
  </div>
);

export default App;