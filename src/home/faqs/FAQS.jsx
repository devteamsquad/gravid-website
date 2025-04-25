import './FAQS.scss';
import Accordion from '../../shared/accordion';
import { Link } from "react-router-dom";

function FAQS() {
  return (
    <div className="faqs-section">
      <div className="faqs_flex_col">
        <h1 className="faqs_title">FAQs</h1>
        <h4 className="faqs_subtitle">
          Find answers to commonly asked questions about an SSI wallet.
        </h4>
        <Accordion items={items}/>
        <div className="faqs_group">
          <h1 className="faqs_title">Still have questions?</h1>
          <Link to="/request-demo"><h5 className="faqs_button">Request Demo</h5></Link>
        </div>
      </div>
    </div>
  );
}

export default FAQS;

const items = [
  {
    header: "What is an SSI wallet?",
    body: "In simple terms, a Self-Sovereign Identity Wallet refers to a digital tool or an application that allows people to use and control their identity very securely. An SSI wallet enables an individual to retain various identity credentials, including their personal information, official papers, verified claims, and other documents, in a decentralized and user-centered manner. Ideally, the SSI wallet uses blockchain technology and cryptography to secure and attest to one’s identity-sensitive information",
  },
  {
    header: "How does it work?",
    body: "Self-Sovereign Identity (SSI) is a decentralized way of managing digital identities. In SSI, no authority controls identity information. Instead, individuals have control over their own digital identities, usually stored in digital wallets. With SSI, people can choose to show just the info required from their credentials using decentralized identifiers and verifiable credentials, proofing stuff without revealing everything. Go to the help center (attached link) to learn how to use Grav. id",
  },
  {
    header: "Is it safe to use?",
    body: "The SSI Wallet uses complex math to protect identity data and strong encryption to prevent hackers from accessing it. The secure protocols prevent eavesdropping and prioritize user control and consent over their data, allowing them to manage and share information securely. Grav.id’s digital identity wallet has gained users' trust since its launch and continues to improve.",
  },
  {
    header: "Can I use it on multiple devices?",
    body: "Grav.id’s Identity is available on both IOS and Android.",
  },
  {
    header: "What are the benefits?",
    body: "SSI Wallet empowers users to take control of their data, reducing the risk of data breaches and unauthorized access to third parties. It allows users to choose what they share and who they share with. Additionally, users have the flexibility to revoke access or update credentials when needed. SSI Wallets are accessible and portable across devices and platforms, allowing users to carry their digital identities wherever they go.",
  },
];