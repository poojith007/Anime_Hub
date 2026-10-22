import React from 'react';
import styled from 'styled-components';
import FramerMotion from 'framer-motion';

const AnimeCardContainer = styled.div`
  background: rgba(0, 0, 0, 0.8); // Semi-transparent background
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: translateY(-5px);
    filter: brightness(1.1); // Subtle brightness increase on hover
  }
`;

const AnimeCard = ({ anime }) => {
  return (
    <AnimeCardContainer 
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', duration: 0.3 }} // Spring animation effect
    >
      {/* ... Display anime title, image, genre, etc. */}
    </AnimeCardContainer>
  );
};

export default AnimeCard;
