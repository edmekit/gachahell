import Card from "./Card.jsx";

const chars = ["Furina", "Chasca", "Zibai"]
function App() {
  return (
    <div className="App">
      {chars.map((char) => <Card character={char}/>)}
    </div>
  )
}

export default App
