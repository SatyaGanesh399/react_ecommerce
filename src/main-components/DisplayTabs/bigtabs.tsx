import React from 'react'
import { Button } from 'antd'

type TabProps = {
    text1: string;
    text2: string;
    text3: string;
    textColor : object;
    imageurl: string;
    styleProp : string
    buttonColor: 'red' | 'white'; // Assuming buttonColor can only be 'red' or 'white'
  };

function bigtabs({text1, text2, text3, imageurl, buttonColor , styleProp, textColor} : TabProps) {
  let classProp = "big-tab-container border-radius-20 d-flex align-items-center " + styleProp;
  return (
    <div className={classProp}>
        <div className='small-tab-left d-flex flex-column'>
            <span className='text1' style={textColor}>{text1}</span>
            <span className='text2' style={textColor}>{text2}</span>
            <span className='text3' style={textColor}>{text3}</span>
            <Button size='large' shape='round' className={buttonColor == "red" ? 'tabs-red-button' : 'tabs-white-button'}>Browse</Button>
        </div>
        <div className='big-tab-right'>
            <img src={imageurl} alt="object-image" className='big-tab-image'/>
        </div>
    </div>
  )
}

export default bigtabs