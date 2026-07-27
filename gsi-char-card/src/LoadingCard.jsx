import { motion } from 'framer-motion'


function LoadingCard(){
    const skeletonVariant = {
        loading: {
            scale: [1, 1.1, 1],
            transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            },
        },
    };

    return (
        <div className="load-card"
        style={{backgroundImage: `
            linear-gradient(to right,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.2)
            )`}}>
            <div className="weapon-team">
                <motion.div className="weapon-loading"
                variants={skeletonVariant}
                animate="loading"></motion.div>
                <motion.div className="team-loading"
                variants={skeletonVariant} animate="loading"></motion.div>
            </div>
            <div className="stats-notes">
                <div className="artifact-stats">
                    <motion.div className="artifact-loading"
                    variants={skeletonVariant} animate="loading"></motion.div>
                    <motion.div className="stats-loading"
                    variants={skeletonVariant} animate="loading"></motion.div>
                </div>
                <motion.div className="notes-loading"
                variants={skeletonVariant} animate="loading"></motion.div>
            </div>
            <div className="char-info">
                <motion.div className="char-name-loading"
                variants={skeletonVariant} animate="loading"></motion.div>
            </div>


        </div>
    );
}

export default LoadingCard