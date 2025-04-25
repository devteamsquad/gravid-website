import React from "react";
import "./Membership.scss";

function Membership() {
  return (
    <main>
      <section className="membership_section">
        <div className="membership_flexCol">
          <h1 className="membership_title">Membership</h1>
          <h5 className="membership_content">
            Members enjoy strategic guidance and best practices through the
            Grav.id Network Foundation’s unique support programs and influence
            the Network’s roadmap and playbook by participating in the different
            workgroups and steering committees.
            <br />
            <br />
            The Foundation continues to welcome new Members that meet the
            membership criteria and support the Foundation’s mission of building
            a more secure, private, and decentralized ecosystem, empowering
            individuals, businesses, and educational institutions around the
            world through transformational blockchain technology.
            <br />
            <br />
          </h5>
          <a href="https://app.grav.id/"><button className="membership_button">Learn More</button></a>
        </div>
      </section>
    </main>
  );
}

export default Membership;
