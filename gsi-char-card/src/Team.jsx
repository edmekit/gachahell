import TeamIcon from "./TeamIcon.jsx";

function Team({ character }){
    return (
        <div className="team-section">
            <header>TEAMS</header>
            <div className="team-display">
                <p> Premium Team</p>
                    <TeamIcon team={character.team.premium}/>
                <p> F2P Team </p>
                <TeamIcon team={character.team.f2p}/>
            </div>
        </div>
    );
}

export default Team