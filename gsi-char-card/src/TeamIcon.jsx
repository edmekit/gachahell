
function TeamIcon({ team }) {
    return (
        <div className="team-container">
            <img className="card-icon" src={`/images/icons/${team[0].toLowerCase()}.png`}/>
            <img className="card-icon" src={`/images/icons/${team[1].toLowerCase()}.png`}/>
            <img className="card-icon" src={`/images/icons/${team[2].toLowerCase()}.png`}/>
            <img className="card-icon" src={`/images/icons/${team[3].toLowerCase()}.png`}/>
        </div>
    );
}

export default TeamIcon