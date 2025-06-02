import React from 'react'
import type { Task, Tasks } from '../../types'
import SingleTask from './SingleTask'

const Tasks: React.FC<Tasks> = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {
        tasks.length > 0 
        ? 
        (
          tasks.map(
            (task: Task) => <SingleTask {...task} />
          )
        ) 
        :
        (
          <p className="text-gray-500">No tasks available</p>
        )
      }
    </div>
  )
}

export default Tasks