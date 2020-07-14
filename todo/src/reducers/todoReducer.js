import { v4 as uuid } from 'uuid';

export const initialState =   {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

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
    case "CLEAR_TASKS":
      return state.filter(task => !task.completed)
    case "TOGGLE_COMPLETED":
      const newState = state.map(task => {
        if(task.id === action.payload.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      }) // new State
      return newState
    case "CLEAR_ALL":
      console.log('test')
      return []
    default:
      return state
  }
}