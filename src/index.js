import React from 'react';
import ReactDOM from "react-dom/client";
import {topics_sample1,new_fan_clubs_sample1,categories_sample1,categorys_fan_clubs_sample1,e_categories_sample1} from './SampleDeta.js';
import './styles/mainStyle.css'
import FanclubCard from './FanclubCard.js';
import { useRef } from 'react';

const MainPage = () => {

  const imageDotsCont = useRef();
  const imagesCont = useRef();

  let nowIndex = 2;
  let totalIndex=-1;

  let marginLeft=0;
  let marginRight=0;


  const leftClickHandler = ()=>{

    // console.log(imageDotsCont.current.children)

    const list = Array.from(imageDotsCont.current.children);

    const imageBox = imagesCont.current
    
    if(nowIndex == 0){
      return;
    }

    marginLeft +=28;

    imageBox.style.marginLeft = `${marginLeft}rem`;

    list[nowIndex].classList.remove("currentDot");

    nowIndex--;

    list[nowIndex].classList.add("currentDot");


  }

  const rightClickHandler = ()=>{

    const list = Array.from(imageDotsCont.current.children);
    const imageBox = imagesCont.current
    
    if(nowIndex == totalIndex){
      return;
    }

    marginRight +=28;

    imageBox.style.marginRight = `${marginRight}rem`;

    list[nowIndex].classList.remove("currentDot");

    nowIndex++;

    list[nowIndex].classList.add("currentDot");

  }

  const imageDotsInspector = (e)=>{

    try{
    // console.log('hhhhhhhelo',e)

    const classes = Array.from(e.target.classList)

    if(classes.length == 1){
      return;
    }

    const dot = classes[classes.length -1].split('_')[1];

    let left = false;

    if(dot < nowIndex){
      left = true;
    }

    if(dot == nowIndex || (nowIndex == 0 && left) || (nowIndex == totalIndex && !left)){
      return;
    }

    const list = Array.from(imageDotsCont.current.children);
    const imageBox = imagesCont.current

    if(left){

      marginLeft +=(nowIndex-dot)*28;

      imageBox.style.marginLeft = `${marginLeft}rem`;
  
      list[nowIndex].classList.remove("currentDot");
  
      nowIndex = dot;
  
      list[nowIndex].classList.add("currentDot");

    }else{
      marginRight +=(dot-nowIndex)*28;

      imageBox.style.marginRight = `${marginRight}rem`;
  
      list[nowIndex].classList.remove("currentDot");
  
      nowIndex = dot;
  
      list[nowIndex].classList.add("currentDot");

    }
  }catch(err){
    return;
  }


  }


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
        <div className='mainPage_headerContainer_imageContents' ref={imagesCont}>
            {topics.map((el,i)=><div className='topics_images_container' style={{backgroundImage: `url(${el.image})` }} key={`${el.image}${i}`}></div>)}
            </div>
            <div className='Left_button' onClick={()=>leftClickHandler()}>◀️</div>
            <div className='Right_button' onClick={()=>rightClickHandler()}>▶️</div>

        </div>
        <div className='mainPage_headerContainer_imageDots' ref={imageDotsCont} onClick={(e)=>imageDotsInspector(e)}>
          {topics.map((el,i)=>{
            totalIndex++;
           return i == 2? <div className={`mainPage_headerContainer_imageDots_dots currentDot dot_${i}`} key={`${el.image}${i}`}></div> :
          <div className={`mainPage_headerContainer_imageDots_dots dot_${i}`} key={`${el.image}${i}`}></div>}
          )}
        </div>



      </div>
      <div className='mainPage_mainBodyContainer'>
        <div className='mainPage_mainBodyContainer_fanclubContainer'>
          <h2 className='fanclub_header'>FAN CLUB</h2>
          <button className='mainPage_mainBodyContainer_fanclubContainer_button'>もっと見るボタン</button>
          {new_fan_clubs.map((el)=><FanclubCard cName='fanclub_card' FanclubCard={el} key={el.idol_uid} />)}
        </div>
        <div className='mainPage_mainBodyContainer_categories'>
          <h2 className='mainPage_mainBodyContainer_categories_Header'>Categories</h2>
        <div className='mainPage_mainBodyContainer_categoriesContainer'>
          
          {categories.map((el,i)=><div className={`categories_card_container cat_card_${i}`} key={el}>
            <button className='categories_card_container_button'>もっと見るボタン</button>
            {categorys_fan_clubs[i].map((e,index)=>{
              if(index === 0){
                return <div className='categories_first_unit' key={e.idol_uid}>
                <h3 className='categories_specific_names'>{`${el}/${e_categories[i]}`}</h3>
                <FanclubCard cName={`cats_card cats_card_${el}`} FanclubCard={e}/></div>
              }

              return <FanclubCard cName={`cats_card cats_card_${el}`} FanclubCard={e} key={e.idol_uid}/>
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