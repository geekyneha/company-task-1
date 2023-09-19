import icon1 from '../assets/dashboard.png';
import icon2 from '../assets/Perks.png';
import icon3 from '../assets/puzzle-piece.png';
import icon4 from '../assets/faq.png';
import icon5 from '../assets/Feedback_Hub_Icon.png';
import {
  AiOutlineUser,
  AiOutlineCloudSync,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsCheck2All } from 'react-icons/bs';
export const navigations = [
  {
    id: 1,
    name: 'Dashboard',
    icon: icon1,
  },
  {
    id: 2,
    name: 'Perks',
    icon: icon2,
  },
  {
    id: 3,
    name: 'Addons',
    icon: icon3,
  },
  {
    id: 4,
    name: 'FAQ',
    icon: icon4,
  },
  {
    id: 5,
    name: 'Support',
    icon: icon5,
  },
];

export const pricingCard = [
  {
    id: 1,
    discount: '$89.99/mo',
    plan: 'Basic',
    price: '$ 9.99/mo',
    btnBg: '#FFE7A9',

    features: [
      {
        icon: <AiOutlineUser />,
        benefit: 'Upto 25 Users',
      },
      {
        icon: <AiOutlineCloudSync />,
        benefit: 'Upto 25gb Storage',
      },
      {
        icon: <AiOutlineMail />,
        benefit: 'Email Support',
      },
    ],
  },
  {
    id: 2,
    discount: '$189.99/ma',
    plan: 'Standard',
    price: '$ 99.99/mo',
    btnBg: '#FF9494',
    features: [
      {
        icon: <AiOutlineUser />,
        benefit: 'Upto 50 Users',
      },
      {
        icon: <AiOutlineCloudSync />,
        benefit: 'Upto 60gb Storage',
      },
      {
        icon: <AiOutlineMail />,
        benefit: 'Email+Chat Support',
      },
    ],
  },
  {
    id: 3,
    discount: '$389.99/ma',
    plan: 'Premiuim',
    price: '$ 199.99/mo',
    btnBg: '#E7A2FF',
    features: [
      {
        icon: <AiOutlineUser />,
        benefit: 'Upto 75 Users',
      },
      {
        icon: <AiOutlineCloudSync />,
        benefit: 'Upto 100gb Storage',
      },
      {
        icon: <AiOutlineMail />,
        benefit: 'Email+Chat+Whatsapp Support',
      },
    ],
  },
];
export const subscriptionCard = [
  {
    id: 1,
    plan: 'Free Starter',
    text: 'The quickest and easiest way to try Protocols with basic functionalities',
    btnText: 'Get Started',
    btnBg: '#C6FF8E',
    smallBtn: 'Free Forever',

    features: [
      {
        icon: <AiOutlineUser />,
        benefit: 'Upto 8 Users',
      },
      {
        icon: <AiOutlineCloudSync />,
        benefit: 'Upto 3gb Storage',
      },
      {
        icon: <AiOutlineMail />,
        benefit: 'Email Support',
      },
      {
        icon: <BsCheck2All />,
        benefit:
          'Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included',
      },
    ],
  },
  {
    id: 2,
    plan: 'Enterprise Plan',
    text: 'Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success.',
    btnText: 'Contact Us',
    btnBg: '#8AB9FF',
    smallBtn: "Let's Connect",

    features: [
      {
        icon: <AiOutlineUser />,
        benefit: 'More than  75 Users',
      },

      {
        icon: <BsCheck2All />,
        benefit: 'Customization of all other features',
      },
    ],
  },
];
