import React, { useState } from 'react';

function ExpandableImage({ src, alt, width, height }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`transition-all duration-500 ease-in ${isExpanded ? 'w-full' : 'cursor-pointer hover:scale-110'
        }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default ExpandableImage;
