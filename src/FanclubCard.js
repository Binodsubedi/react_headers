import React from 'react';

const FanclubCard = ({FanclubCard,cName}) => {

  // console.log(FanclubCard.main_image)
  return (
    <div className={cName}>
      <div style={{backgroundImage:`url(${FanclubCard.main_image})`}}/>
      <div className='details_container'>
        <div className='details_container_tag_name'>
          <p>${FanclubCard.idol_name}</p>
          <p>${FanclubCard.tag}</p>
        </div>
        <div>
        <h4>{FanclubCard.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default FanclubCard;