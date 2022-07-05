import React, { ChangeEvent, useState } from 'react';
import { AddNewTask } from '../AddNewTask';
import { TasksTable } from '../TasksTable';

import { Container } from './style';

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

export function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if(newTaskTitle === ''){
            return;
        }
        const newTask: Task = {
            id: tasks.length + 1,
            title: newTaskTitle,
            isComplete: false
        }

        setTasks([...tasks, newTask]);
        setNewTaskTitle('');
    }

    function handleToggleTaskCompletion(id: number){
        const checkedTask = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        } : task)

        setTasks(checkedTask);
    }

    function handleRemoveTask(id: number){ 
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    return(
        <>
            <Container>
                <AddNewTask newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} createNewTask={handleCreateNewTask}/>
                <TasksTable 
                    arrayTasks={tasks} 
                    handleToggleTaskCompletion={handleToggleTaskCompletion}
                    handleRemoveTask={handleRemoveTask}
                />
            </Container>
        </>
    )
}