import React from 'react'
import Column from './Column'
import type { Columns } from '../../types'

const Columns: React.FC<Columns> = ({ columns }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {columns.map((column, index) => (
        <Column key={index} {...column} />
      ))}
    </div>
  )
}

export default Columns