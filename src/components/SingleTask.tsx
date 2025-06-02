import React from 'react'
import type { Task } from '../../types'
import { useDraggable } from '@dnd-kit/core';

const SingleTask: React.FC<Task> = ({ id, title, description, status, priority, author, assignee }) => {
  
  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id: id.toString(),
    data: {
      type: 'task',
      taskId: id,
      column: status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' '),
      // supports: ['Open'],
    }
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    opacity: isDragging ? 0.5 : 1,
  } : undefined;
  
  return (
    <div 
    key={id} 
    className="p-4 bg-white rounded shadow" 
    ref={setNodeRef} 
    style={style} 
    {...listeners} 
    {...attributes}
    >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-sm text-gray-500">Status: {status}</p>
        <p className="text-sm text-gray-500">Priority: {priority}</p>
         <p className="text-sm text-gray-500">Assignee: {assignee || 'Unassigned'}</p>
    </div>
  )
}

export default SingleTask
