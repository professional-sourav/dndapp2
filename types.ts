export type Task = {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'completed' | 'pending';
    priority: 'high' | 'medium' | 'low';
    author: string;
    assignee: string | null;
    created_at: Date;
    due_date: Date;
}

export type Tasks = {
    tasks: Task[] | [];
}

export type TaskData = {
    status: 'success' | 'error' | '';
    data: Task[];
}

export type Column = {
    title: string;
    tasks: Task[] | [];
}

export type Columns = {
    columns: Column[] | [];
}
