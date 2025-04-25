import Main from "./main/Main";
import TrustedIdentity from "./trusted-identity/TrustedIdentity";
import FAQS from "./faqs/FAQS";
import Insights from "./data-security/Insights";
import Unlock from "./unlock-the-power/Unlock";

function HomePage() {
  return (
    <>
      <main className="home-sect"> 
        <div><Main /></div>
        <div><TrustedIdentity /></div>
        <div></div><Unlock />
        <div><Insights /></div>
        <div><FAQS /></div>
      </main>
     
    </>
  );
}

export default HomePage;
