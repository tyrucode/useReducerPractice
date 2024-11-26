import { useReducer } from "react"
import ThemeContext from "./CONTEXT/ThemeContext";

const ThemeToggler = ({children}) => {
    const themeReducer = (state, action) => {
        switch (action.type) {
            case 'TOGGLE_THEME':
                return {
                    color: state.color === 'olive' ? 'orange' : 'olive'
                }
                default: return state;
        }
        
    };
    const [state, dispatch] = useReducer(themeReducer, { color: 'olive' });

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME'})
     }

    return (
        <ThemeContext.Provider value={{ themeState: state, dispatchTheme: dispatch }}>
        <button onClick={toggleTheme} style= {{backgroundColor: state.color}}>TOGGLE THEME</button>
        {children}
        </ThemeContext.Provider>
    )
}

export default ThemeToggler