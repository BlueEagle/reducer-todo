import { v4 as uuid } from 'uuid';
import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/todoReducer'
import Task from './components/Task'
import './App.css';

function App() {
  const [ inputValue, setinputValue ] = useState("")
  const [ state, dispatch ] = useReducer(reducer, initialState)
  console.log(state)

  const handleChanges = e => {
    e.preventDefault()
    setinputValue(e.target.value)
  }


  return (
    <div className="App">
      <input type="text" name="taskEntry" value={inputValue} onChange={handleChanges} />
      <button onClick={() => {
        dispatch({ type: "ADD_TASK", payload: inputValue })
        setinputValue('')
        }}>Add task</button>
      
      {/* <Task task={initialState[0]} /> */}
      {/* {state.map(task => <Task key={uuid()} task={task} onClick={() => {alert('test')}} />)} */}
      {state.map(task => 
        <p key={uuid()} onClick={() => {
          dispatch({ type: "TOGGLE_COMPLETED", payload: task})
        }}>{task.item} is completed: {task.completed.toString()}</p>
      )}
    </div>
  );
}

export default App;
