import React from "react"

const Task = (props) => {
  const { item, completed } = props.task

  return (
    <div>
      <p>{item} is completed: {completed.toString()}</p>
    </div>
  )
}

export default Task