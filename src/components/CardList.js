import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => (
  <div>
    {robots.map((robot, i) => (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    ))}
  </div>
);

export default CardList;
