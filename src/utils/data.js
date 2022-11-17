import { FcMindMap } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import { nanoid } from "@reduxjs/toolkit";

export const data = [
  {
    id: nanoid(),
    icon: <FcSmartphoneTablet size={30} />,
    title: "Frontend Development",
    info: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. ",
    content: [
      {
        title: "How to become a front-end developer",
        info: "Some of the most prominent skills you’ll want to have as a front-end developer are:",
        pointOne:
          "HTML, CSS, and JavaScript: These three languages are essential to anyone who wants to work in front-end development. HTML, CSS, and JavaScript work together to determine the look and functionality of the page. ",
        pointTwo:
          "Frameworks: Frameworks are tools required for JavaScript and CSS to perform the way you want them to. Having a solid understanding of them is crucial for creating page structures.",
        pointThree:
          "Developer tools and software: Software like version control, which tracks and controls changes in your source code, is critical to allow you to make changes without starting over. Understanding how to use many different software development tools is a building block to a successful career. ",
      },
    ],
  },
  {
    id: nanoid(),
    icon: <FcMindMap size={30} />,
    title: "Backend Development",
    info: "Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers",
    content: [
      {
        title: "How to become a Backend Developer?",
        info: "Here are the steps you will need to follow:",
        pointOne:
          "Step 1: Be well versed with the basics of Data Structures & Algorithm",
        pointTwo: "Step 3: Learn the basics of Databases.",
        pointThree: "Step 4: Learn Framework(s)",
      },
    ],
  },
  {
    id: nanoid(),
    icon: <FcBullish size={30} />,
    title: "Data Science",
    info: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains. Data science is related to data mining, machine learning, big data, computational statistics and analytics.",
    content: [
      {
        title: "How to become a Data Analyst?",
        info: "To fulfill the responsibilities (mentioned above) a data analyst must possess a vast and rich skillset. From domain expertise to various tools, here’s all you need to become a data analyst.",
        pointOne:
          "Knowledge of Programming:You should have hands-on experience with programming languages such as Python, R, and JavaScript. ",
        pointTwo:
          "Knowledge of Data Analysis Tools: You should be experienced in working with databases and data analysis tools. You should be proficient in writing SQL queries and procedures, know Microsoft Excel, Matlab, and IBM SPSS to analyze trends and plan to drive accurate insights.",
        pointThree:
          "Understanding of Statistics and Machine Learning Algorithms: You must know concepts like probability distributions, hypothesis testing, regression analysis, and various classification and clustering techniques.",
      },
    ],
  },
  {
    id: nanoid(),
    icon: <FcEngineering size={30} />,
    title: "Machine Learning",
    info: "Machine learning (ML) is the subset of artificial intelligence (AI) that focuses on building systems that learn—or improve performance—based on the data they consume. Artificial intelligence is a broad term that refers to systems or machines that mimic human intelligence. Machine learning and AI are often discussed together, and the terms are sometimes used interchangeably, but they don’t mean the same thing. An important distinction is that although all machine learning is AI, not all AI is machine learning.",
    content: [
      {
        title: "How to become a Backend Developer?",
        info: "",
        pointOne:
          "If you’re wondering how to become a Machine Learning Engineer, you’ll need to demonstrate proficiency in Python and/or C++ and their associated libraries. Python and C++ are a couple of the most widely used programming languages for Data Scientists and Machine Learning Engineers.",
        pointTwo: "Enroll in a Machine Learning Course",
        pointThree: "",
      },
    ],
  },
];
