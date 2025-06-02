import React from 'react'
import type { Task } from '../../types'

const SingleTask: React.FC<Task> = ({ id, title, description, status, priority, author, assignee }) => {
  return (
    <div key={id} className="p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">Status: {status}</p>
        <p className="text-sm text-gray-500">Priority: {priority}</p>
         <p className="text-sm text-gray-500">Assignee: {assignee || 'Unassigned'}</p>
    </div>
  )
}

export default SingleTask
