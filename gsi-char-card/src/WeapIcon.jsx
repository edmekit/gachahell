function WeapIcon({ weapon }){
    return (
        <div className="weapon-container">
            <img className="card-icon" src={weapon.icon}/>
        </div>
    );
}

export default WeapIcon