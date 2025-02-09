import charityImg from "../assets/images/charity.png";
import ekartImg from "../assets/images/e-kart.png";
import nexusImg from "../assets/images/nexus.png";
import restroImg from "../assets/images/restro.png";

export const projects = [
  {
    title: "Charity App",
    desc: "The Charity App is a web-based platform built using HTML, CSS, and JavaScript. It provides a simple and user-friendly interface for users to explore various charitable causes and make donations. The website features a clean design with smooth navigation, ensuring a seamless experience. It highlights different charity events and campaigns, encouraging users to contribute to meaningful initiatives and support those in need.",
    tags: [
      {
        name: "HTML,CSS",
        color: "red-600",
      },
      {
        name: "Javascript",
        color: "green-600",
      },
    ],
    img: charityImg,
    link: "https://aarthipriya2021.github.io/charity/index.html",
    code: "https://github.com/aarthipriya2021/charity",
  },
  {
    title: "E-Kart",
    desc: "E-Kart is an e-commerce web application developed as part of a frontend development internship. The app allows users to browse products, add items to their cart, manage a wishlist, and proceed to checkout. It features a user-friendly interface, built using React.js, Bootstrap, and Redux for state management. The authentication system enables users to log in, sign up, and log out. The project showcases expertise in responsive UI design, state management, and API integration.",
    tags: [
      {
        name: "React JS",
        color: "red-600",
      },
      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "HTML,CSS",
        color: "yellow-600",
      },
      {
        name: "Redux",
        color: "blue-800",
      },
    ],
    img: ekartImg,
    link: "https://ekart-app.pages.dev/",
    code: "https://github.com/aarthipriya2021/ekart-app",
  },
  {
    title: "Nexus Nova",
    desc: "The NexusNova App is a web application built using React, Bootstrap, HTML, and CSS, ensuring a responsive and visually appealing interface. It leverages React for dynamic and efficient UI rendering, while Bootstrap enhances the design with pre-styled components for a seamless user experience. The application is designed for smooth navigation and accessibility, making it user-friendly and visually engaging across various devices.",
    tags: [
      {
        name: "React",
        color: "red-600",
      },
      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "HTML,CSS",
        color: "yellow-600",
      },
    ],
    img: nexusImg,
    link: "https://nexusnova-app.pages.dev/",
    code: "https://github.com/aarthipriya2021/nexusnova_app",
  },
  {
    title: "Restro App",
    desc: "The Restro App is a single-page application (SPA) built using React and React Router for seamless navigation without page reloads. It provides a smooth and dynamic user experience, allowing users to explore restaurant-related features efficiently. With React Router, it ensures fast transitions between different sections, enhancing usability and performance. The app is designed to be responsive and user-friendly. 🍽️🚀",
    tags: [
      {
        name: "ReactJs",
        color: "red-600",
      },
      {
        name: "React-Router",
        color: "green-600",
      },
      {
        name: "HTML,CSS",
        color: "blue-800",
      },
    ],
    img: restroImg,
    link: "https://restro-app.pages.dev/",
    code: "https://github.com/aarthipriya2021/restro_app",
  },
];
