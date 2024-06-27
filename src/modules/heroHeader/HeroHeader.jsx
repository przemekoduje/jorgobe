import './heroHeader.scss'

export default function HeroHeader() {
  return (
    <div className='heroheader'>
        <div className="left">
            <img src="/assets/images/Picture-left.png" alt="" />
        </div>
        <div className="right">
            <img src="/assets/images/Picture-right.png" alt="" />
            <div className="text-content">
                <h1>High-active skincare made in Denmark</h1>
                <p>Vegan everyday essentials for achieving and maintaining clean and beautiful skin, effortlessly and naturally.</p>
                
                <button className='button-global'>SHOP NOW</button>

            </div>
        </div>

    </div>
  )
}
