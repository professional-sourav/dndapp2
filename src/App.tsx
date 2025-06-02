import { useEffect, useState } from "react"
import type { Column, Columns as ColumnsType, Task , TaskData } from '../types'
import { TaskApi } from '../config'
import Columns from "./components/Columns"

const initialTasks: TaskData = {
  status: '',
  data: []
}

const initialColumns: ColumnsType = {
  columns: []
}

function App() {

  const [tasks, setTasks] = useState<Task[]>(initialTasks.data)
  const [columns, setColumns] = useState<ColumnsType>(initialColumns)

  useEffect(() => {

    const initialColumnsFromTasks = (tasks: Task[]) => {

      const uniqueStatuses = Array.from(new Set(tasks.map(task => task.status)))
      
      const columns: Column[] = uniqueStatuses.map((status: string) => ({
        title: status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' '),
        tasks: tasks.filter(task => task.status === status)
      }))
      console.log('Initial columns:', columns);

      const allColumns: ColumnsType = {
        columns
      }

      return allColumns
    }

    const fetchTasks = async () => {
      try {
        const response = await TaskApi.get('/')

        if (response.status !== 200) {
          throw new Error('Failed to fetch tasks')
        }

        const taskData: TaskData = response.data

        const tasks: Task[] = taskData.data

        setTasks(tasks)

        console.log('XXX fetched tasks XXX:', tasks);
        
        setColumns(initialColumnsFromTasks(tasks))
        
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    }

    fetchTasks()

  }, [])
        
    if (tasks.length) {
      console.log('Tasks:', tasks);
    }

    const handleColumnsUpdate = (updatedColumns: Column[]) => {

      console.log('Updating columns from main:', columns);
      const modifiedColumns: ColumnsType = {
        // columns: [...columns.columns, ...updatedColumns]
        columns: updatedColumns
      };
      setColumns(modifiedColumns);
      console.log('Updated columns from main:', updatedColumns);
    }

  return (
    <>
      <h1 className="p-4">Hello Drag and Drop</h1>

      <Columns {...columns} onColumnsUpdate={handleColumnsUpdate} />
    </>
  )
}

export default App
