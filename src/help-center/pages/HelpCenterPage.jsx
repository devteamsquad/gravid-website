import React from "react";
import HelpCenterBrand from "../features/HelpCenter/components/HelpCenterBrand/HelpCenterBrand";
import { HelpCenterList } from "../features/HelpCenter/components";

const HelpCenterPage = () => {
  return (
    <div>
      <HelpCenterBrand />
      <HelpCenterList />
    </div>
  );
};

export default HelpCenterPage;
