import { motion } from 'framer-motion'

function Icon({ character, onClick }) {
        return (
        <motion.div className="card-container"
        onClick={onClick}
        whileTap={{scale: 0.9}}
        whileHover={{scale: 1.1}}
        style={{backgroundImage: `url('/images/splash/${character.toLowerCase()}_splash.png')`}}>
            <img
            className="team-icon" 
            src={`/images/icons/${character.toLowerCase()}.png`}/>
        </motion.div>   
    );
}

export default Icon