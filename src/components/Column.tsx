import React from 'react'
import type { Column } from '../../types'
import Tasks from './Tasks'


const Column: React.FC<Column> = ({ title, tasks }) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <Tasks tasks={tasks} />
    </div>
  )
}

export default Column
