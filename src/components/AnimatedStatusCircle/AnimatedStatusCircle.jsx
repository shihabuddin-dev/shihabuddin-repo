import React from 'react';
const AnimatedStatusCircle = ({
  size = 50,
  color = '#4CAF50',
  duration = 5000,
}) => {

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    '--animation-duration': `${duration}ms`,
  };

  return (
    <div className="animated-status-circle-css" style={style}></div>
  );
};

export default AnimatedStatusCircle;