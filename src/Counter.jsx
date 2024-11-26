import { useReducer, useContext } from "react"
import ThemeContext from "./CONTEXT/ThemeContext";

const Counter = () => {
    const { themeState } = useContext(ThemeContext);

    const initialState = { count : 0 };
    const [state, dispatch] = useReducer(reducer, initialState)
    
    function reducer(state, action) {
        switch (action.type) {
            case 'increment' :
                return {count: state.count + 1};
            case 'decrement' :
                return {count: state.count - 1}
            case 'reset' :
                return {count: 0};
            default: 
                console.log('error')
        }
    }

    return (
        <>  
            <h2>Counter!</h2>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({type: 'increment'})} style={{backgroundColor: themeState.color}}>increment</button>
            <button onClick={() => dispatch({type: 'decrement'})} style={{backgroundColor: themeState.color}}>decrement</button>
            <button onClick={() => dispatch({type: 'reset'})} style={{backgroundColor: themeState.color}}>reset</button>
        </>
    )
}

export default Counter