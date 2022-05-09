import React from 'react';

import { Container } from './styles';

interface CardProps {
  url: string;
  alt: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ url, alt, description, buttonText }) => (
  <Container>
    <img src={url} alt={alt} />
    <div className="content">
      <p>{description}</p>
      <button type="button">{buttonText}</button>
    </div>
  </Container>
);

export { Card };
