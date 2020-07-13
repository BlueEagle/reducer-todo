import { v4 as uuid } from 'uuid';

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: uuid()
        }
      ]
    // case "TOGGLE_COMPLETED":
    //   console.log('Task clicked!')
    //   // return state
    // case "TOGGLE_COMPLETED":
    //   const modifiedTask = {
    //     ...action.payload,
    //     completed: !action.payload.completed
    //   }
    //   return [
    //     ...state, //.filter(task => task.id !== action.payload.id), // filter out the state object that needs changes, we don't need the old one anymore
    //     modifiedTask
    //   ]
    case "TOGGLE_COMPLETED":
      const newState = state.map(task => {
        if(task.id === action.payload.id) {
          console.log(`${task.completed}`)
          task.completed = !task.completed
        }
        return task
      }) // new State
      return newState
    default:
      return state
  }
}