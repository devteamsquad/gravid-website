import Main from "./main/Main";
import Community from "./community/Community";
import ToolsForImpact from "./tools-for-impact/Impact";
import CuttingEdgeTech from "./tech/CuttingEdgeTech";
import GetInTouch from "./get-in-touch/GetInTouch";
import Fundraising from "./fundraising/Fundraising";

function LandingPage() {
  return (
    <>
      <Main />
      <Community />
      <Fundraising />
      <ToolsForImpact />
      <CuttingEdgeTech />
      <GetInTouch />
    </>
  );
}

export default LandingPage;
