import Weapon from "./Weapon.jsx";
import Team from "./Team.jsx";
import Artifact from "./Artifact.jsx";
import Stats from "./Stats.jsx";
import Notes from "./Notes.jsx";
function Card({ character }) {

    if (!character) {
        return null;
    }

    return (
        <div className="build-card"
        style={{backgroundImage: `
            linear-gradient(to right,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.2)
            ),
            url('/images/chascabg.jpg')`}}>
            <div className="weapon-team">
                <Weapon character={character}/>
                <Team character={character}/>
            </div>
            <div className="info-notes">
                <div>
                    <h1>{character.info.name}</h1>
                    <p>{character.info.role}</p>
                </div>
                <Notes character={character}/>
            </div>
            <div className="artifact-stats">
                <Artifact character={character}/>
                <Stats character={character}/>
            </div>

        </div>
    );
}

export default Card