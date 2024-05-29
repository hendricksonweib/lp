import React from 'react'
import FlexRow from '../layout/FlexRow'
function Li({ img, text }) {
    return (
        <>
            <FlexRow gaps={'15px'} item={'center'}>
                {img}
                {text}
            </FlexRow>
        </>
    )
}

export default Li