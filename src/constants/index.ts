import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,

  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  roadmap5,
  roadmap6,
  roadmap7,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  loreal,
  cola,
  disney,
  sxsw,
  lego,
} from "../assets";

export const navigation = [
  {
    id: "2",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Solutions",
    url: "#solutions",
  },
  {
    id: "3",
    title: "Process",
    url: "#process",
  },
 
 
  {
    id: "0",
    title: "Work",
    url: "#work",
  },

 
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  {
    id: "5",
    title: "Contact Us",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [loreal,
  cola,
  disney,
  sxsw,
  lego];

export const brainwaveServices = [
  "Comfy UI Workflows",
  "Custom LLM Chatbots",
  "Custom AI Modules",
  "AI Tools Enterprise Deployment",
  "Generative AI for Enterprises",
  "AI Wrappers",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Discovery Stage",
    text: " Our discovery process identifies key challenges, ensuring every solution is purpose-built to maximize ROI by reducing misaligned efforts.",
    text1: "Align your goals with precision",
    date: "Step 1",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Requirement Analysis",
    text: "By analyzing key pain points, we craft bespoke solutions, such as custom chatbots, proven to enhance customer satisfaction by up to 50%.",
    text1: "Tailored for your needs",
    date: "Step 2",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Process Strategization",
    text: "With a focused roadmap, we accelerate employee productivity, reducing training costs by 40% and driving measurable ROI.",
    text1: "Plan smarter, execute better",
    date: "Step 3",
    status: "in progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Technology Identification",
    text: " We identify cutting-edge AI technologies tailored to your needs, ensuring seamless integration and scalable efficiency for long-term success.",
    text1: "Smart solutions start here",
    date: "Step 4",
    status: "in progress",
    imageUrl: roadmap4,
  },
  {
    id: "4",
    title: "QA & Compliance Testing",
    text: "Our rigorous QA process reduces post-deployment issues by 35%, minimizing downtime and maintenance costs while meeting all compliance standards.",
    text1: "Deliver with confidence",
    date: "Step 5",
    status: "in progress",
    imageUrl: roadmap5,
  },
  {
    id: "5",
    title: "Deployment",
    text: "Tailored AI modules boost user engagement by 60%, increasing adoption and ensuring greater ROI through streamlined functionality.",
    text1: "Deploy for impact",
    date: "Step 6",
    status: "in progress",
    imageUrl: roadmap6,
  },
  {
    id: "6",
    title: "Evaluating Results",
    text: " Our continuous evaluation drives a 70% improvement in decision-making, enabling faster, data-driven strategies for long-term success.",
    text1: "Refine and grow",
    date: "Step 7",
    status: "in progress",
    imageUrl: roadmap7,
  }
];

export const collabText =
  "We’re not just another AI company—we’re your partner in innovation and growth. At Cryenx Labs, we specialize in crafting cutting-edge AI solutions designed to help ambitious brands achieve measurable, ROI-driven results.";

export const collabContent = [
  {
    id: "0",
    title: "WE",
    text: collabText,
  },
  // {
  //   id: "1",
  //   title: "Smart Automation",
  // },
  // {
  //   id: "2",
  //   title: "Top-notch Security",
  // },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 34,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 34,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 34,
    height: 34,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Hair Diagnostic Technology",
    text: "Our groundbreaking hair analysis AI leverages advanced computer vision and head detection algorithms to generate comprehensive hair health visualizations.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Nail Dimension Mapping",
    text: "We've developed a cutting-edge AI vision system that revolutionizes nail diagnostics through precise marker-based measurement technologies.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage3,
    light: true,
  },
  {
    id: "2",
    title: "AI Travel Planner",
    text: "We architect complete AI solution ecosystems. By understanding your unique business requirements, we design and implement pre-configured workflows that leverage top-tier market solutions.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
  },
  // {
  //   id: "3",
  //   title: "Strategic AI Deployment",
  //   text: "Our strategic approach focuses on deploying proven AI workflows directly within your organization. We eliminate the complexity of tool selection and implementation",
  //   backgroundUrl: "assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/invite/yGqSnBCdUW",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/CryenxLabs",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/cryenxlabs/",
  },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "https://web.telegram.org/",
  // },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/cryenxlabs/",
  },
];
