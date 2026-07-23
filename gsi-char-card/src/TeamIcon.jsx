
function TeamIcon({ team }) {
    return (
        <div className="team-container">
            <img className="card-icon" src={`/images/${team[0].toLowerCase()}.png`}/>
            <img className="card-icon" src={`/images/${team[1].toLowerCase()}.png`}/>
            <img className="card-icon" src={`/images/${team[2].toLowerCase()}.png`}/>
            <img className="card-icon" src={`/images/${team[3].toLowerCase()}.png`}/>
        </div>
    );
}

export default TeamIcon