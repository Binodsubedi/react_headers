import React from 'react';
import ReactDOM from "react-dom/client";
import {topics_sample1,new_fan_clubs_sample1,categories_sample1,categorys_fan_clubs_sample1,e_categories_sample1} from './SampleDeta.js';
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

  const e_categories = e_categories_sample1;
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
          <h2 className='fanclub_header'>FAN CLUB</h2>
          {new_fan_clubs.map((el)=><FanclubCard cName='fanclub_card' FanclubCard={el} />)}
        </div>
        <div className='mainPage_mainBodyContainer_categories'>
          <h2 className='mainPage_mainBodyContainer_categories_Header'>Categories</h2>
        <div className='mainPage_mainBodyContainer_categoriesContainer'>
          
          {categories.map((el,i)=><div className={`categories_card_container cat_card_${i}`}>
            {categorys_fan_clubs[i].map((e,index)=>{
              if(index === 0){
                return <div className='categories_first_unit'>
                <h3 className='categories_specific_names'>{`${el}/${e_categories[i]}`}</h3>
                <FanclubCard cName={`cats_card cats_card_${el}`} FanclubCard={e}/></div>
              }

              return <FanclubCard cName={`cats_card cats_card_${el}`} FanclubCard={e}/>
            })}
          </div>)}
        </div>
        </div>
      </div>

      

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);


// export default MainPage;