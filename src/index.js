import React from 'react';
import ReactDOM from 'react-dom';
import {topics_sample1,new_fan_clubs_sample1,categories_sample1,e_categories_sample1,categorys_fan_clubs_sample1} from './SampleDeta.js';
import './styles/mainStyle.css'
import FanclubCard from './FanclubCard.js';

const MainPage = () => {
  const topics = topics_sample1;
  // //topics = topics_sample2;
  // //topics = topics_sample3;
  // //topics = topics_sample4;

  const new_fan_clubs = new_fan_clubs_sample1;
  // //new_fan_clubs = new_fan_clubs_sample2;
  // //new_fan_clubs = new_fan_clubs_sample3;
  // //new_fan_clubs = new_fan_clubs_sample4;

  const categories = categories_sample1;
  // //categories = categories_sample2;
  // //categories = categories_sample3;
  // //categories = categories_sample4;

  const e_categories = categories_sample1;
  // //e_categories = categories_sample2;
  // //e_categories = categories_sample3;
  // //e_categories = categories_sample4;

  const categorys_fan_clubs = categorys_fan_clubs_sample1;
  // //categorys_fan_clubs = categorys_fan_clubs_sample2;
  // //categorys_fan_clubs = categorys_fan_clubs_sample3;

  return (
    <div className='mainPage'>
      
      <div className='mainPage_headerContainer'>

        <div className='outerShell'>
        <div className='mainPage_headerContainer_imageContents'>
            {topics.map((el)=><div className='topics_images_container' style={{backgroundImage: `url(${el.image})`}}></div>)}
            </div>
        </div>
        <div className='mainPage_headerContainer_imageDots'>
          {topics.map((el)=><div className='mainPage_headerContainer_imageDots_dots'></div>)}
        </div>


      </div>
      <div className='mainPage_mainBodyContainer'>
        <div className='mainPage_mainBodyContainer_fanclubContainer'>
          {new_fan_clubs.map((el)=><FanclubCard FanclubCard={el} />)}
        </div>
        <div className='mainPage_mainBodyContainer_categoriesContainer'></div>
      </div>
      

    </div>
  );
};

ReactDOM.render(
    <MainPage />,
  document.querySelector('#root')
);

// export default MainPage;