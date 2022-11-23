import { createContext } from "react";
import{RemoveTask, UpdateTask} from './Type'

interface ContextProps{
    removeTask : RemoveTask;
    updateTask : UpdateTask;
}

const Context = createContext<ContextProps>({
    removeTask : () => {},
    updateTask : () => {},
});

export default Context;