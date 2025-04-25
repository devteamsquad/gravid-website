import './FoundationMembers.scss';

function FoundationMembers() {
  return (
    <div className="foundation_members_section">
      <h1 className="fm_title">Foundation Members</h1>
      <div className="fm_flex_row">
        <img
          className="fm_image"
          src={require("../../assets/brand_logo_rockwell.png")}
          alt="alt text"
        />
        <img
          className="fm_image"
          src={require("../../assets/brand_logo_iohk.png")}
          alt="alt text"
        />
        <img
          className="fm_image"
          src={require("../../assets/brand_logo_cardano.png")}
          alt="alt text"
        />
      </div>
    </div>
  );
}

export default FoundationMembers;
