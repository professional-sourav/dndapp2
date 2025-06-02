import React from 'react'
import type { Column } from '../../types'
import Tasks from './Tasks'
import { useDroppable } from '@dnd-kit/core'


const Column: React.FC<Column> = ({ title, tasks }) => {

 const {isOver, setNodeRef, active} = useDroppable({
    id: title,
    data: {
      type: 'column',
      columnId: title
    }
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  console.log(`Droppable area: ${title}`, isOver, active);
  

  return (
    <div 
    className="flex-1 bg-gray-100 p-4 rounded shadow" 
    ref={setNodeRef} 
    // style={style}
    >
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <Tasks tasks={tasks} />
        {
          isOver && <div className="text-green-500">Drop here</div>
        }
    </div>
  )
}

export default Column
