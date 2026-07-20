import TeamIcon from "./TeamIcon.jsx";

function Team({ character }){
    return (
        <div className="team-section">
            <p/> Premium Team
            <TeamIcon team={character.team.premium}/>
            <p/> F2P Team
            <TeamIcon team={character.team.f2p}/>
        </div>
    )
}