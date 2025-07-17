import carent from "../assets/web-images/carent.png"
import myPortfolio from "../assets/web-images/my-portfolio.png";

const category = {
  // การพัฒนา / การออกแบบ
  webDesign: "Web Design",
  webDev: "Web Development",
  responsiveWeb: "Responsive Design",
  landingPage: "Landing Page",

  //   ประเภทเว็บไซต์
  booking: "Booking System",
  business: "Business Website",
  e_commerce: "E-commerce",

  //   เทคโนโลยี
  mernStack: "MERN Stack",
  react: "React",
  nextjs: "Next.js",
  tailwind: "Tailwind CSS",
  mongo: "MongoDB",
  firebase: "Firebase",

  //   ภาษา
  javaScript: "Java Script",
  typeScript: "Type Script",
};

export const websites = [
  {
    name: "my-protfolio",
    image: myPortfolio,
    url: "#",
    domain: "#",
    category: [
      category.webDesign,
      category.responsiveWeb,
      category.landingPage,
      category.typeScript,
    ],
    year: 2025,
  },
  {
    name: "carent",
    image: carent,
    url: "https://carent-umber.vercel.app/",
    domain: "carent-umber.vercel.app",
    category: [
      category.webDesign,
      category.responsiveWeb,
      category.booking,
      category.mernStack,
      category.javaScript,
    ],
    year: 2025,
  },
];
