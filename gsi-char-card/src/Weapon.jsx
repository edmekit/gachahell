import WeapIcon from "./WeapIcon";

function Weapon({ character }){
    return (
        <div className="weapon-section">
            <p/>BIS
            <WeapIcon weapon={character.weapon.bis}/>
            <p/>F2P
            <WeapIcon weapon={character.weapon.f2p}/>
        </div>
    );
}

export default Weapon