import './Main.scss';


function Main() {
  return (
    <>
      {/* mobile */}
      <section className="mobile_home_section">
        <div className="mobile_home_flex_col">
          <h1 className="mobile_home_title">An Ecosystem of Trust</h1>
          <h4 className="mobile_home_title2">
            Verified Users, Verified Credentials,
            <br/> Verified Businesses
          </h4>
          <div className="mobile_home_flex_row">
            <a href='https://hubs.li/Q02r7NXr0'>
              <img
                className="mobile_home_icon"
                src={require("../../assets/google_play_download_button.png")}
                alt="alt text"
              />
            </a>
            <a href='https://hubs.li/Q02r7NTQ0'>
              <img
                className="mobile_home_icon"
                src={require("../../assets/app_store_download_button.png")}
                alt="alt text"
              />
            </a>
          </div>
        </div>
        <img
          className="mobile_home_image"
          src={require("../../assets/xmobile.png")}
          alt="alt text"
        />    
      </section>
        
      {/* end mobile */}

      <section className="home_section">
        <img
          className="home_image"
          src={require("../../assets/mobile_wallet_interface.png")}
          alt="alt text"
        />
        <div className="home_flex_col">
          <h1 className="home_title">An Ecosystem of Trust</h1>
          <h4 className="home_title2">
            Verified Users, Verified Credentials, Verified Businesses
          </h4>
          <div className="home_flex_row">
          <a href='https://hubs.li/Q02r7NXr0'>
              <img
                className="mobile_home_icon"
                src={require("../../assets/google_play_download_button.png")}
                alt="playstore"
              />
            </a>
            <a href='https://hubs.li/Q02r7NTQ0' target="_blank" rel="noreferrer">
              <img
                className="mobile_home_icon"
                src={require("../../assets/app_store_download_button.png")}
                alt="apple store"
              />
            </a>
          </div>
        </div>
        <img
          className="home_image2"
          src={require("../../assets/personal_identity_dashboard.png")}
          alt="alt text"
        />
      </section>
    </>


  );
}

export default Main;
