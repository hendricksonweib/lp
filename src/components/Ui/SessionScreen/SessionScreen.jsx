import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'
import '../../../style/global.css'

function SessionScreen({ img, text, subtitle }) {
const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                className="session-screen">
                <div className="conteiner-sobre">
                    <session className='main-sobre'>
                        <FlexRow item={'center'} gaps={'100px'}>
                            <img className='imagemScreen' src={img} alt={img} />
                            <Flex item={'start'} gaps={'5px'}>
                                <h2 className='h2-title'>{text}</h2>
                                <p className='p-subtitle'>{subtitle}</p>
                            </Flex>
                        </FlexRow>
                    </session>
                </div>
            </motion.div>
        </>
    )
}

export default SessionScreen