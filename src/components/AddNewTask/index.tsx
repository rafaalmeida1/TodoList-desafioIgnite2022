import { Container} from './style';
import plusImg from '../../assets/plus.svg'

interface AddNewTaskProps {
    newTaskTitle: string;
    setNewTaskTitle: (title: string) => void;
    createNewTask: () => void;
}

export function AddNewTask({newTaskTitle, setNewTaskTitle, createNewTask}: AddNewTaskProps) {

    return(
        <Container>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle}
                />
                <button 
                    type="submit"
                    onClick={createNewTask}    
                >
                    <span>Criar</span>
                    <img src={plusImg} alt="Botão de criar tarefa"/>
                </button> 
        </Container>
    )
}