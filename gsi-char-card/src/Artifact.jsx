function Artifact({ character }){
    return (
        <div className="artifact-section">
            <header>ARTIFACT</header>
            <img className="card-icon" src={character.artifact.icon}/>
            <p>{character.artifact.name}</p>
        </div>
    );
}

export default Artifact