import React from 'react'
import FlexRow from '../../layout/FlexRow'
import Flex from '../../layout/Flex'

function SessionScreenLeft({ img, text, subtitle }) {
    return (
        <>
            <div className="conteiner-sobre">
                <session className='main-sobre'>
                    <FlexRow item={'center'} gaps={'100px'}>
                        <Flex item={'start'} gaps={'5px'}>
                            <h2 className='h2-title'>{text}</h2>
                            <p className='p-subtitle'>{subtitle}</p>
                        </Flex>
                        <img className='imagemScreen' src={img} alt={img} />
                    </FlexRow>
                </session>
            </div>
        </>
    )
}

export default SessionScreenLeft