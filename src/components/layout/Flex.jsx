import React from 'react';

const CenteredContainer = ({ item,gaps, children }) => {
  const FlexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:item,
    flexDirection: 'column',
    gap:gaps
  }

  return (
    <div style={FlexStyle}>
      {children}
    </div>
  );
}

export default CenteredContainer;
