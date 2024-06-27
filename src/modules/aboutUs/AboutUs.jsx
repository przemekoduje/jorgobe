import './aboutUs.scss';

export default function AboutUs() {
  return (
    <div className='aboutus'>
        <h5>About Us</h5>
        <div className="au-content">
            <div className="left">

            </div>
            <div className="right">
                <img src="./assets/images/au-right.png" alt="" />
            </div>
            <div className="list">
                <div className="head">
                    <h1>
                        Jorgobe <span className='white'>pledge</span>
                    </h1>
                </div>
                <div className="items">
                    <div className="item">
                        <h1><span className='number'>1</span></h1>
                        <span className='text'>
                            <span>Free from</span>
                            <span>harmful</span>
                            <span>additives</span>
                        </span>
                    </div>
                    <div className="item">
                        <h1><span className='number'>2</span></h1>
                        
                        <span className='text'>
                           <span>100% </span>
                           <span>vegan</span>
                        </span>
                    </div>
                    <div className="item">
                        <h1><span className='number'>3</span></h1>
                        <span className='text'>
                            
                            <span>Cruelty</span> 
                            <span>free</span>
                            
                            
                        </span>
                    </div>
                    <div className="item">
                        <h1><span className='number'>4</span></h1>
                        <span className='text'>
                            
                            <span>Made in</span>
                            <span> Denmark</span>
                            
                            
                        </span>
                    </div>
                </div>
                <button className='button-global'>LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}
