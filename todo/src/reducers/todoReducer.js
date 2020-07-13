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
    default:
      return state
  }
}