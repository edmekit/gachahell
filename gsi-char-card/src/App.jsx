import Icon from "./Icon.jsx";

const chars = ["Furina", "Chasca", "Zibai"]
function App() {
  return (
    <div className="App">
      {chars.map((char) => <Icon character={char}/>)}
    </div>
  )
}

export default App
