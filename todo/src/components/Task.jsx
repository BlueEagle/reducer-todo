import React from "react"

const Task = (props) => {
  const { item, completed } = props.task

  return (
    <p>{item} is completed: {completed.toString()}</p>
  )
}

export default Task