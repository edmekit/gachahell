function Stats({ character }) {
    return (
        <div className="stats-section">
            <p>HP</p>
            <p>{character.recommended.hp}</p>
            <p>HP</p>
            <p>{character.recommended.atk}</p>
            <p>HP</p>
            <p>{character.recommended.def}</p>
            <p>HP</p>
            <p>{character.recommended.critrt}</p>
            <p>HP</p>
            <p>{character.recommended.critdmg}</p>
            <p>HP</p>
            <p>{character.recommended.er}</p>
            <p>HP</p>
            <p>{character.recommended.em}</p>
        </div>
    );
}

export default Stats