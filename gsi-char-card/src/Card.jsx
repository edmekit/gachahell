import Weapon from "./Weapon.jsx";
import Team from "./Team.jsx";
import Artifact from "./Artifact.jsx";
import Stats from "./Stats.jsx";
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
            <div>
                
            </div>
            <div className="artifact-stats">
                <Artifact character={character}/>
                <Stats character={character}/>
            </div>

        </div>
    );
}

export default Card