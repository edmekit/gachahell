function LoadingCard(){
    return (
        <div className="load-card"
        style={{backgroundImage: `
            linear-gradient(to right,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.2)
            )`}}>
                <h1>Generating Card...</h1>
            </div>
    );
}

export default LoadingCard