import React from 'react';

const CenteredContainer = ({ item, children }) => {
  const FlexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: `(${item})`,
    flexDirection: 'column',
  }

  return (
    <div style={FlexStyle}>
      {children}
    </div>
  );
}

export default CenteredContainer;
