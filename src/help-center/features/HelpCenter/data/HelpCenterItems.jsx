import { HelpCenterItemModel } from "../models/HelpCenterItemModel";
import SignUpImage from "./../../../../assets/helper_center/sign_up.webp";
import BusinessAcountImage from "./../../../../assets/helper_center/business_account_creation.JPG";
import CreateCommunityImage from "./../../../../assets/helper_center/create_community.JPG";
import CreateServiceImage from "./../../../../assets/helper_center/create_service.JPG";
import AddAdminImage from "./../../../../assets/helper_center/add_admin.JPG";
import JoinCommunityViaLinkBanner from "./../../../../assets/helper_center/join_community_via_link/banner.jpg";
import DonateToCampaignBanner from "./../../../../assets/helper_center/donate_to_campaign/banner.jpg";
import CreatingFundraiserBanner from "./../../../../assets/helper_center/creating_fundraiser/banner.jpg";

const signUpItem = new HelpCenterItemModel(
  1,
  SignUpImage,
  "Grav.id Signup",
  ""
);
const GravIdCommunityPost = new HelpCenterItemModel(
  2,
  CreateCommunityImage,
  "Grav.id Community Posts",
  "How to Create a Community Post"
);
const BusinessAcount = new HelpCenterItemModel(
  3,
  BusinessAcountImage,
  "Grav.id Setup A Business Account",
  "How to Setup a Business Account"
);
const CreateService = new HelpCenterItemModel(
  4,
  CreateServiceImage,
  "Grav.id Create A Business Service",
  "How to Create a Business Service "
);
const AdminAccount = new HelpCenterItemModel(
  5,
  AddAdminImage,
  "Grav.id Add A Business Admin",
  "How to add a Business Admin"
);
const DonateToCampaign = new HelpCenterItemModel(
  6,
  DonateToCampaignBanner,
  "Grav.id Donating to non profits",
  "How to Donate to Non-profits"
);
const JoinCommunityViaLink = new HelpCenterItemModel(
  7,
  JoinCommunityViaLinkBanner,
  "How to join a community using a link",
  "Joining communities using a link."
);
const CreatingFundraiser = new HelpCenterItemModel(
  8,
  CreatingFundraiserBanner,
  "How to create a fundraiser",
  ""
);
export const helpCenterData = [
  signUpItem,
  GravIdCommunityPost,
  BusinessAcount,
  CreateService,
  AdminAccount,
  DonateToCampaign,
  JoinCommunityViaLink,
  CreatingFundraiser,
];
