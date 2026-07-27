import { motion } from 'framer-motion'

function Icon({ character, onClick }) {
        return (
        <motion.div className="card-container"
        whileHover={{scale: 1.1}}
        style={{backgroundImage: `url('/images/char_bg.png')`}}>
            <img
            className="team-icon" 
            src={`/images/icons/${character.toLowerCase()}.png`}/>
            <button onClick={onClick}>{character}</button>
        </motion.div>   
    );
}

export default Icon