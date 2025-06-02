import React from 'react'
import Column from './Column'
import type { ColumnsProps } from '../../types'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'

const Columns: React.FC<ColumnsProps> = ({ columns, onColumnsUpdate }) => {

  const handleDragEnd = (event: DragEndEvent) => {
      
    console.log('Drag ended:', event);

    if (!event) {
      console.error('Drag event is undefined');
      return;
    }

    if (event?.over?.id !== event?.active?.data?.current?.column) {
      const updatedColumns = columns.map(column => {
        if (column.title === event?.active?.data?.current?.column) {
          return {
            ...column,
            tasks: column.tasks.filter(task => task.id !== event.active.data?.current?.taskId)
          }
        } else if (column.title === event.over?.id) {
          const task = columns.find(col => col.title === event.active.data.current?.column)?.tasks.find(task => task.id === event.active.data.current.taskId);
          return {
            ...column,
            tasks: task ? [...column.tasks, task] : column.tasks
          }
        }
        return column;
      });

      console.log('Updated columns:', updatedColumns, onColumnsUpdate);
      // Here you would typically update the state or make an API call to persist the changes

      resetColumns(updatedColumns);      
    }
  }

  const resetColumns = (columns: any) => {

    if (onColumnsUpdate) {

      onColumnsUpdate(columns);
    }
  }

  return (
        
    <DndContext
    onDragEnd={handleDragEnd}>
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {columns && columns?.map((column, index) => (
        <Column key={index} {...column} />
      ))}
    </div>
    </DndContext>
  )
}

export default Columns