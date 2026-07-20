function WeapIcon({ weapon }){
    return (
        <div className="weapon-container">
            <img src={weapon.icon}/>
            <p>{weapon.name}</p>
        </div>
    );
}

export default WeapIcon