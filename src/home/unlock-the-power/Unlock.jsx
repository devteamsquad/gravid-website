import './Unlock.scss';

function Unlock() {
  return (
  <section className="unlock_section">
    <img
        className="unlock_image"
        src={require("../../assets/eclipse.png")}
        alt="alt text"
    />
    <img
        className="mobile_unlock_image"
        src={require("../../assets/eclipse_mobile.png")}
        alt="alt text"
    />
    <div className="unlock_flexCol">
      <h1 className="unlock_title">Unlock the Power of Grav.id</h1>
      <h5 className="unlock_subtitle">
        Click to learn more about how our ecosystem <br/>
        empowers you to take control of your digital identity.
      </h5>
      <a href="https://app.grav.id/"><button className="unlock_button">Learn More</button></a>
    </div>
  </section>
  );
}

export default Unlock;
