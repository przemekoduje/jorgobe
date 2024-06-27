import './ingredients.scss';

export default function Ingredients() {
  return (
    <div className='ingredients'>
        <h5>Ingredients</h5>
        <div className="i-content">
            <div className="graphic-module one">
                <div className="rect1"></div>
                <img src="/assets/images/i-1.png" alt="" className='img1'/>
            </div>
            <div className="graphic-module two">
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
                <img src="/assets/images/i-2.png" alt="" className='img2'/>
                <img src="/assets/images/i-3.png" alt="" className='img3'/>
                <img src="/assets/images/i-4.png" alt="" className='img4'/>
            </div>
            <div className="graphic-module three">
                <div className="rect6"></div>
                <div className="rect7"></div>
                <div className="rect8"></div>
                <img src="/assets/images/i-5.png" alt="" className='img5'/>
                <img src="/assets/images/i-6.png" alt="" className='img6'/>
            </div>
            <h1>Key ingredients for better skincare efficacy</h1>
            <p>Hover on pictures to learn more</p>
            <button className='button-global'>SEE FULL INGREDIENT LIST</button>

        </div>
    

    </div>
  )
}
