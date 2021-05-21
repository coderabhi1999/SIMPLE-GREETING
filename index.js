import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date();
curDate =curDate.getHours();
const curDate2 =new Date().toLocaleTimeString();

let greeting = "";
const cssStyle ={};
let wishes ="";



if(curDate>=1&&curDate<12){
    greeting = "Good Morning";
    cssStyle.color="orange";
    wishes = '"Every morning is a new blessing, a second chance that life gives you because you’re so worth it. Have a great day ahead."';
   
    
  }
else if(curDate>=12&&curDate<19){
    greeting = "Good Afternoon";
    cssStyle.color="yellow";
    wishes="“If you try and lose then it isn't your fault. But if you don't try and we lose, then it's all your fault.”";
    
}
else {
    greeting = "Good Night";
    cssStyle.color="black";
    wishes = "“Nighttime can seem longer than the day when you dream big dreams. Daytime lasts longer for people who make their dreams come true.”";
    
  }

ReactDOM.render(
  <>
  <div className="size">
  <div className="container">
      <div className="content">
        <div className="heading">
          <h1> Hello, This is Abhishek,<span style={cssStyle}>{greeting}</span></h1>
        </div>
      <div className="info">
        <h2>{wishes} </h2>
      </div>
      <div className="watch">
       <h1>{curDate2}</h1>
      
      </div>
      <div className="news_container"> 
      <div className="news_section">
        <div className="news">
        <h1>Get Some News BRO!!</h1>
        <br/>
        <a href="https://timesofindia.indiatimes.com/india">THE TIMES OF INDIA</a>
        <br/>
        <br/>
        <a href="https://www.accuweather.com/en/in/india-weather">WEATHER REPORT</a>
        </div>
      </div>
      </div>

      <div className="waste_container"> 
      <div className="waste_section">
        <div className="waste">
        <h1>Let's waste some time!!</h1>
        <br/>
        <a href="https://www.facebook.com/">FACEBOOK</a>
        <br/>
        <br/>
        <a href="https://www.instagram.com/">INSTAGRAM</a>
        </div>
      </div>
      </div>


      

    </div>

  </div>
  </div>
  </>,
  document.getElementById('root')
);


