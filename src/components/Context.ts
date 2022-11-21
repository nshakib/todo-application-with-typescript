import { createContext } from "react";
import{RemoveTask} from './Type'

interface ContextProps{
    removeTask : RemoveTask;
}

const Context = createContext<ContextProps>({
    removeTask : () => {}
});

export default Context;