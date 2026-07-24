function Stats({ character }) {
    return (
        <div className="stats-section">
            <header>STATS</header>
            <p>HP: {character.recommended.hp}</p>
            <p>ATK: {character.recommended.atk}</p>
            <p>DEF: {character.recommended.def}</p>
            <p>CRIT Rate:{character.recommended.critrt}</p>
            <p>CRIT DMG: {character.recommended.critdmg}</p>
            <p>Energy Recharge: {character.recommended.er}</p>
            <p>Element Mastery: {character.recommended.em}</p>
        </div>
    );
}

export default Stats