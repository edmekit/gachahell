function Artifact({ character }){
    return (
        <div className="artifact-section">
            <img className="card-icon" src={character.artifact.icon}/>
            <p>{character.artifact.name}</p>
        </div>
    );
}

export default Artifact