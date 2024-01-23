import React from 'react'
import { Button } from 'antd'

type SmallTab = {
  text1 : string,
  text2 : string,
  text3 : string,
  imgUrl : string,
  styleProp : string,
  textColor : object,
  buttonColor : "red" | "white",
}

function smalltab({text1, text2, text3, imgUrl, buttonColor, styleProp, textColor} : SmallTab ) {
  let classProp = "small-tab-container border-radius-20 d-flex align-items-center " + styleProp;
  return (
    <div className={classProp} >
        <div className='small-tab-left d-flex flex-column'>
            <span className='text1' style={textColor}>{text1}</span>
            <span className='text2' style={textColor}>{text2}</span>
            <span className='text3' style={textColor}>{text3}</span>
            <Button size='large' shape='round' className={buttonColor == "red" ? 'tabs-red-button' : 'tabs-white-button'}>Browse</Button>
        </div>
        <div className='small-tab-right'>
            <img src={imgUrl} alt="object-image" className='small-tab-image'/>
        </div>
    </div>
  )
}

export default smalltab