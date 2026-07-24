import WeapIcon from "./WeapIcon";

function Weapon({ character }){
    return (
        <div className="weapon-section">
            <header>WEAPONS</header>
            <div className="weapon-display">
                <div className="bis-weapon-section">
                    <p>BIS</p>
                    <WeapIcon weapon={character.weapon.bis}/>               
                </div>
                <div className="f2p-weapon-section">
                    <p>F2P</p>
                    <WeapIcon weapon={character.weapon.f2p}/>               
                </div>
            </div>
        </div>
    );
}

export default Weapon