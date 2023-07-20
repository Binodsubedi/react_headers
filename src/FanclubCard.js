import React from 'react';
import './styles/fanCard.css'

const FanclubCard = ({FanclubCard}) => {

  console.log(FanclubCard.main_image)
  return (
    <div>
      <div style={{backgroundImage:`url(${FanclubCard.main_image})`}}/>
    </div>
  );
};

export default FanclubCard;