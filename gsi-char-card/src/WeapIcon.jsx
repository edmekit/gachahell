function WeapIcon({ weapon }){
    return (
        <div className="weapon-container">
            <img className="card-icon" src={weapon.icon}/>
            <p>{weapon.name}</p>
        </div>
    );
}

export default WeapIcon