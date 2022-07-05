import { Container} from './style';
import plusImg from '../../assets/plus.svg'
import { ChangeEvent, useState } from 'react';

interface AddNewTaskProps {
    newTaskTitle: string;
    setNewTaskTitle: (title: string) => void;
    createNewTask: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function AddNewTask({newTaskTitle, setNewTaskTitle, createNewTask}: AddNewTaskProps) {

    return(
        <Container onSubmit={createNewTask}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                />
                <button 
                    type="submit"
                    disabled={newTaskTitle === ''}
                >
                    <span>Criar</span>
                    <img src={plusImg} alt="Botão de criar tarefa"/>
                </button> 
        </Container>
    )
}