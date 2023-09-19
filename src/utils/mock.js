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
