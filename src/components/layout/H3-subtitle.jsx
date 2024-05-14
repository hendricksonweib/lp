import React from 'react'

function H3({ Subtitle, fontWeight }) {
    return (
        <>
            <h3 className="subtitle-main" style={{ fontWeight: fontWeight }}>
                {Subtitle}
            </h3>
        </>
    )
}

export default H3