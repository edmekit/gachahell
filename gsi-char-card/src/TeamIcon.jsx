
function TeamIcon({ team }) {
    return (
        <div className="team-container">
            <img src={`/images/${team[0].toLowerCase()}.png`}/>
            <img src={`/images/${team[1].toLowerCase()}.png`}/>
            <img src={`/images/${team[2].toLowerCase()}.png`}/>
            <img src={`/images/${team[3].toLowerCase()}.png`}/>
        </div>
    );
}

export default TeamIcon