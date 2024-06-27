import "./ourPhilosophy.scss";

export default function OurPhilosophy() {
  return (
    <div className="ourphilosophy">
      <h5>Our Philosophy</h5>
      <div className="content">
        <div className="left">
          <div className="haslo">
            <span className="big">Less</span>
            <span className="small">but</span>
            <span className="big">Better</span>
          </div>
          <button className="button-global">LEARN ABOUT OUR PHILOSOPHY</button>
          
        </div>
        <div className="right">
          <img src="./assets/images/oph-right.png" alt="" />
            
        </div>
      </div>
    </div>
  );
}
