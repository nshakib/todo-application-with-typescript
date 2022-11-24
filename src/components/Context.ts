import { createContext } from "react";
import{RemoveTask, UpdateTask, CountTask, EditTask} from './Type'

interface ContextProps{
    removeTask : RemoveTask;
    updateTask : UpdateTask;
    countTask: CountTask;
    editTask: EditTask;
}

const Context = createContext<ContextProps>({
    removeTask : () => {},
    updateTask : () => {},
    countTask : () => {},
    editTask : () => {},
});

export default Context;