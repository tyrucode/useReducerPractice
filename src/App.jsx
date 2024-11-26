import ThemeToggler from "./ThemeToggler"
import Counter from "./Counter"

function App() {

  return (
    <>
      <h1><b>GOAL</b>: Create a Counter, Create a Theme Switcher</h1>
      <h2>using useReducer</h2>
      <ThemeToggler>
        <Counter /> 
      </ThemeToggler>
    </>
  );

}

export default App
