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
            url('/images/splash/${(character.info.name).toLowerCase()}_splash.png')`}}>
            <div className="weapon-team">
                <Weapon character={character}/>
                <Team character={character}/>
            </div>
            <div className="stats-notes">
                <div className="artifact-stats">
                    <Artifact character={character}/>
                    <Stats character={character}/>
                </div>
                <Notes character={character}/>
            </div>
            <div className="char-info"
            style={{backgroundImage: `url('/images/bg/${(character.info.name).toLowerCase()}_bg.png')`}}>
                <div>
                    <h1>{character.info.name}</h1>
                    <p>{character.info.role}</p>
                </div>
            </div>
        </div>
    );
}

export default Card