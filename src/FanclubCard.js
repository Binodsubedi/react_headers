import React from 'react';

const FanclubCard = ({FanclubCard,cName}) => {

  // console.log(FanclubCard.main_image)
  return (
    <div className={cName}>
      <div style={{backgroundImage:`url(${FanclubCard.main_image})`}}/>
    </div>
  );
};

export default FanclubCard;