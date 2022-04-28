import { createContext, useReducer} from "react";


export const ThemeContext = createContext();

const initial = {darkMode : false};

const themeReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE":
            return {darkMode : !state.darkMode};
        default:
            return state;
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initial);
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}