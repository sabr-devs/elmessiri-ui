'use client'
import { fadeUpAnimation } from '@/utils/animation'
import { motion } from 'framer-motion'


const FadeUpAnimation = ({ children, className } : { children: React.ReactNode, className: string }) => {
  return (
    <motion.div variants={fadeUpAnimation} initial="initial" animate="animate" className={className}>
      {children}
    </motion.div>
  )
}

export default FadeUpAnimation
