import './App.css';
import imgs from "./data";
import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {GiPin as Icon} from "react-icons/gi";
function App() {



const [sliderData, setSliderData] = useState(imgs[0]);
const filterOptions = [
  'Do not filter', 'season', 'landscape','trees'
];

const imgOptions = [
  'All','2','3','4','5'
]

const handleClick= (index) =>{
  console.log(index);                                            //to change the state of images//   
  const slider = imgs[index];
  setSliderData(slider);
}

  return (
    <div className="main">
      <div className="upperdiv">
        <img className="upperimg" src={sliderData.value}  alt=""/> 
      </div>
      <div className="middiv">
        <p className="para">Files selected : {sliderData.id+1}/{imgs.length} Files</p>
      <Dropdown className='dropdown drop1' options={filterOptions}  value={filterOptions[0]} placeholder="Select an option" />
      <Dropdown className='dropdown drop2' options={imgOptions}  value={imgOptions[0]} placeholder="Image" />
      </div>
      <div className="flex_row">
          {imgs.map((data,i)=>
            <div className="thumbnail" key={i} >
                {sliderData.id===i && <div className='pin'><Icon/></div>}
              <img className={sliderData.id===i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="70" width="100"
              alt="" />
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
