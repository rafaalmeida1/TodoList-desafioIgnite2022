import { Container, Content, TasksCreateCounter, TasksCompleteCounter, TasksEmpty, Tasks } from './style';
import clipboardImg from '../../assets/Clipboard.svg'
import {Trash} from 'phosphor-react';

interface TasksSchema {
    id: number;
    title: string;
    isComplete: boolean;
}

interface TasksProps {
    arrayTasks: TasksSchema[];
    handleToggleTaskCompletion: (id: number) => void;
    handleRemoveTask: (id: number) => void;
}

function CounterTasksCompleted(arrayTasks: TasksSchema[]) {
    const totalTasksCompleted = arrayTasks.filter(task => task.isComplete).length;
    return totalTasksCompleted;
}


export function TasksTable({arrayTasks, handleToggleTaskCompletion, handleRemoveTask}: TasksProps){
    return(
        <Container>
            <Content>
                <TasksCreateCounter>
                    <span>Tarefas criadas </span>
                    <strong>{arrayTasks.length}</strong>
                </TasksCreateCounter>

                <TasksCompleteCounter>
                    <span>Concluídas </span>
                    <strong>{arrayTasks.length === 0 ? arrayTasks.length : `${CounterTasksCompleted(arrayTasks)} de ${arrayTasks.length}`}</strong>
                </TasksCompleteCounter>
            </Content> 

            <TasksEmpty isActive={arrayTasks.length <= 0}>
                <img src={clipboardImg} alt="Clipboard" />
                <h2>Você ainda não tem tarefas cadastradas</h2>    
                <p>Crie tarefas e organize seus itens a fazer</p>
            </TasksEmpty>

            <TasksContent arrayTasks={arrayTasks} handleToggleTaskCompletion={handleToggleTaskCompletion} handleRemoveTask={handleRemoveTask}/>
        </Container>
    )
}

function TasksContent({arrayTasks, handleToggleTaskCompletion, handleRemoveTask}: TasksProps): JSX.Element {
    return(
        <Tasks isActive={arrayTasks.length > 0}>
            {arrayTasks.map(task => (
                <li key={task.id} className={task.isComplete ? 'completed' : ''}>
                    <label>
                        <input 
                            type="checkbox"
                            checked={task.isComplete}
                            onClick={() => handleToggleTaskCompletion(task.id)}
                        />
                        <span></span>
                    </label>
                    <p>{task.title}</p>
                    <button type="button" onClick={() => handleRemoveTask(task.id)}>
                        <Trash size={24}/>
                    </button>
                </li>
            ))}
        </Tasks>

    )
}