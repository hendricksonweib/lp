import React from 'react';
import FlexRow from '../layout/FlexRow';
import "../../style/global.css";

function RadialImput({ text, name, onChange }) {
    return (
        <>
        <FlexRow item={"center"} gaps={"1rem"}>
            <input type="radio" name={name} value={text} onChange={onChange} />
            <label htmlFor={text}>{text}</label>
        </FlexRow>
        </>
    );
}

export default RadialImput;
