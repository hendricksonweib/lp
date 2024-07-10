import React from 'react'
import FlexRow from '../layout/FlexRow'
import "../../style/global.css"

function RadialImput({ text }) {
    return (
        <>
        <FlexRow item={"center"} gaps={"1rem"}>
            <input type="radio" name="drone" value={text} />
            <label for={text}>{text}</label>
        </FlexRow>
        </>
    )
}

export default RadialImput