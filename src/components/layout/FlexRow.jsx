import React from 'react'

function FlexRow({ item, gaps, children }) {
    const FlexStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: item,
        flexDirection: 'row',
        gap: gaps
    }

    return (
        <div style={FlexStyle}>
            {children}
        </div>
    )
}

export default FlexRow