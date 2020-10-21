import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './App2.css'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className='form-boot'>
            <form onSubmit={
          e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value));
            input.value='';
          }
        }>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter the Todo"
      aria-label="To do"
      aria-describedby="basic-addon2"
      type="text" ref={el => (input = el)} 
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" type='submit'>Add</Button>
    </InputGroup.Append>
  </InputGroup>
  
  </form>
    </div>
  );
}

export default connect()(AddTodo);