
function Card({ character }){
    return (
        <div className="card-container">
            <img
            className="team-icon" 
            src={`/images/${character.toLowerCase()}.png`}/>
            <button>{character}</button>
        </div>   
    );
}

export default Card