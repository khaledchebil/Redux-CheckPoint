import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import {updateTodo} from '../actions'

const Todo = ({ onClick, completed, text, todo }) => { 
  const [editable, setEditable] = useState(false)
  const [description, setDescription] = useState()
  const dispatch = useDispatch();
  return (

    <div>
  <li
    onClick={onClick}
    style={{ color: completed ? 'red' : 'black' }}
  >
    {text}


    </li>
    <div>
                {/* <span>#{todo.id}</span> */}
                {editable ? <input 
                type='text' 
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                />: <span>{}</span>}
           
                <button className='bg-green br1 white dib' onClick={()=> {
                  dispatch(updateTodo(
                      {
                          ...todo,
                          text : description
                      }
                  ));

                  if(editable) {
                    setDescription(description);
                }
                    setEditable(!editable)

                   

                }}>{editable ? 'update' : 'Edit'}</button>
            
            </div>

  </div>
);
              }
export default Todo;