
function TeamIcon({ team }) {
    return (
        <div className="team-container">
            <img className="card-icon" src={`/images/icons/${team[0].toLowerCase()}.png`} alt={team[0]}/>
            <img className="card-icon" src={`/images/icons/${team[1].toLowerCase()}.png`} alt={team[1]}/>
            <img className="card-icon" src={`/images/icons/${team[2].toLowerCase()}.png`} alt={team[2]}/>
            <img className="card-icon" src={`/images/icons/${team[3].toLowerCase()}.png`} alt={team[3]}/>
        </div>
    );
}

export default TeamIcon