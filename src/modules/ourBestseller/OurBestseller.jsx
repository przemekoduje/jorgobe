import "./ourBestseller.scss";

export default function OurBestseller() {
  return (
    <div className="ourbestseller">
      <h5>Our Bestseller</h5>
      <div className="ob-content">
        <div className="left">
          <div className="ob-grid">
            <img className="ob1" src="./assets/images/ob1.png" alt="" />
            <img className="ob2" src="./assets/images/ob2.png" alt="" />
            <img className="ob3" src="./assets/images/ob3.png" alt="" />
          </div>
          <div className="frontground">
            <img src="./assets/images/ob4.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="ob-text">
            <span className="heading">BOOST YOUR COLLAGEN PRODUCTION</span>
            <h1>Bakuchiol Face Oil</h1>
            <p>
              This highly concentrated anti-ageing face oil, with bakuchiol,
              vitamin C and powerful antioxidants, boosts your skin’s natural
              production of collagen, reduces fine lines and wrinkles and leaves
              your skin silky smooth.
            </p>
            <button className="button-global">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
