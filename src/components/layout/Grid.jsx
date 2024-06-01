import React from 'react'

function Grid({ children, columns , itens}) {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '20px',
        padding: '20px',
        alignItems:itens
    };
    return (
        <div style={gridStyle}>
            {children}
        </div>
    )
}

export default Grid