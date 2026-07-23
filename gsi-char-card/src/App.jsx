import Icon from "./Icon.jsx";
import { useState } from "react";
import Card from "./Card.jsx";
import LoadingCard from "./LoadingCard.jsx";

const chars = ["Chasca", "Citali", "Columbina", "Flins", "Furina", "Lauma", "Mavuika", "Nefer", "Sandrone", "Skirk", "Zibai"]
function App() {
  
  const [characterData, setCharacterData] = useState(null);
  const [loading, isLoading] = useState(false);

  async function loadCharacter(name) {
      isLoading(true);
      const res = await fetch(
          `https://genshinapi-0vzb.onrender.com/character/${name.toLowerCase()}`
      );

      const data = await res.json();
      setCharacterData(data);
      isLoading(false);
  }

  return (
    <div>
      <div className="App">
      {chars.map((char) => <Icon
        key={char}
        character={char}
        onClick={() => loadCharacter(char)}/>)}
      </div>
    
      {loading ? (
        <LoadingCard/>
      ) : (
        <Card character={characterData}/>
      )}
    </div>

  )
}

export default App
