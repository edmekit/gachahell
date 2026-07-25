function Stats({ character }) {
    return (
        <div className="stats-section">
            <header>STATS GOAL</header>
            <div className="stat">
                <span>HP</span>
                <span>:</span>
                <span>{character.recommended.hp}</span>
            </div>

            <div className="stat">
                <span>ATK</span>
                <span>:</span>
                <span>{character.recommended.atk}</span>
            </div>
            <div className="stat">
                <span>DEF</span>
                <span>:</span>
                <span>{character.recommended.def}</span>
            </div>
            <div className="stat">
                <span>CR</span>
                <span>:</span>
                <span>{character.recommended.critrt}</span>
            </div>
            <div className="stat">
                <span>CD</span>
                <span>:</span>
                <span>{character.recommended.critdmg}</span>
            </div>
            <div className="stat">
                <span>ER</span>
                <span>:</span>
                <span>{character.recommended.er}</span>
            </div>
            <div className="stat">
                <span>EM</span>
                <span>:</span>
                <span>{character.recommended.em}</span>
            </div>
        </div>
    );
}

export default Stats