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
      {state.map(task => <Task task={task}/>)}
    </div>
  );
}

export default App;
