function Icon({ character, onClick }) {
        return (
        <div className="card-container"
        style={{backgroundImage: `url('/images/char_bg.png')`}}>
            <img
            className="team-icon" 
            src={`/images/${character.toLowerCase()}.png`}/>
            <button onClick={onClick}>{character}</button>
        </div>   
    );
}

export default Icon