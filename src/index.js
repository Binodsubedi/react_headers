import React from 'react';
import ReactDOM from 'react-dom';
import './SampleDeta.js';
import './styles/mainStyle.css'

const MainPage = () => {
  // topics = topics_sample1;
  // //topics = topics_sample2;
  // //topics = topics_sample3;
  // //topics = topics_sample4;

  // new_fan_clubs = new_fan_clubs_sample1;
  // //new_fan_clubs = new_fan_clubs_sample2;
  // //new_fan_clubs = new_fan_clubs_sample3;
  // //new_fan_clubs = new_fan_clubs_sample4;

  // categories = categories_sample1;
  // //categories = categories_sample2;
  // //categories = categories_sample3;
  // //categories = categories_sample4;

  // e_categories = categories_sample1;
  // //e_categories = categories_sample2;
  // //e_categories = categories_sample3;
  // //e_categories = categories_sample4;

  // categorys_fan_clubs = categorys_fan_clubs_sample1;
  // //categorys_fan_clubs = categorys_fan_clubs_sample2;
  // //categorys_fan_clubs = categorys_fan_clubs_sample3;

  return (
    <div className='mainPage'>
      <div className='mainPage_headerContainer'>
        <div className='mainPage_headerContainer_imageContents'></div>
        <div className='mainPage_headerContainer_imageDots'></div>

      </div>
      <div className='mainPage_mainBodyContainer'>
        <div className='mainPage_mainBodyContainer_fanclubContainer'></div>
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