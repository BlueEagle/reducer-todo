import { v4 as uuid } from 'uuid';
import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/todoReducer'
import './App.css';
import styled from 'styled-components'

function App() {
  const [ inputValue, setinputValue ] = useState("")
  const [ state, dispatch ] = useReducer(reducer, [initialState])
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

      <button onClick={() => {
        dispatch({ type: "CLEAR_TASKS" })
      }}>Clear</button>

      <button onClick={() => 
        dispatch({ type: "CLEAR_ALL"})
      }>Clear all</button>
      



      {state.map(task => {
        if(task.completed)
          return <CheckedP key={uuid()} onClick={() => {
            dispatch({ type: "TOGGLE_COMPLETED", payload: task})
          }}>{task.item}</CheckedP>
        else
          return <p key={uuid()} onClick={() => {
            dispatch({ type: "TOGGLE_COMPLETED", payload: task})
          }}>{task.item}</p>
        }
      )}
    </div>
  );
}

export default App;

const CheckedP = styled.p`
  text-decoration: line-through;
`