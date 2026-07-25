function Notes({ character }) {
    return (
        <div className="notes-section">
            <header>NOTES</header>
            <p>{character.notes}</p>
        </div>
    );
}

export default Notes