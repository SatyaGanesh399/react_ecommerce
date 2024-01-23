import { Button } from 'antd'
import './index.scss'


function index() {
  return (
    <div className='header-container d-flex align-items-center justify-content-center'>
       
        <div className='header-right d-flex align-items-start justify-content-center flex-column'>
        <span className='header-small margin-10'>Beats Solo</span>
            <span className='header-large'>Wireless</span>
            <span className='header-extralarge'>HEADPHONE</span>
            <Button shape="round" size='large' className='header-buy-button'>Shop by category</Button>
        </div>
        <div className='header-left d-flex align-items-start justify-content-center flex-column'>
        <img src="headphones.png"  className='headphones-image'/> 
        </div>
    </div>
  )
}

export default index