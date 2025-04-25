import DirectAndPrivate from "./direct-and-private/DirectAndPrivate";
import Membership from "./membership/Membership";
import EasilyCreate from "./easily-create/EasilyCreate";
import TheFoundation from "./the-foundation/TheFoundation";
import TrustedAndSecured from "./trusted-and-secured/TrustedAndSecured";
import Main from "./main/Main";
import FoundationMembers from "./foundation-members/FoundationMembers";

function FoundationPage() {
  return (
  <>
  <main className="foundation-sect">
    <div><Main /></div>
    <div><TheFoundation /></div>
    <div><TrustedAndSecured /></div>
    <div><EasilyCreate /></div>
    <div><DirectAndPrivate /></div>
    <div><Membership /></div>
    <div><FoundationMembers /></div>
  </main>
    
  </>

  );
}

export default FoundationPage;
