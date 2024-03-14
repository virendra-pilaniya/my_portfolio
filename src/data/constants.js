import connectexp from '../images/connect_with_expert.png'
import prastuti from '../images/prastuti.png'
import contentverse from '../images/contentverse.png'
import todoist from '../images/todoist.png'
import movieapp from '../images/Movie_app.png'
import knockout from '../images/knockOut.png'
import styled from "styled-components";

const Img = styled.img`
  position: relative;
  width: 52%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Bio = {
  name: "Virendra Pilaniya",
  roles: [
    "Full Stack Developer",
    "Django Developer",
    "React Developer",
    "Ruby On Rails Developer",
  ],
  description:
    "I'm an enthusiastic Software Development Engineer at Cogoport, a graduate of IIT BHU. Proficient in React and Django, I'm committed to delivering impactful solutions with a positive mindset. Let's collaborate and create excellence together!",
  github: "https://github.com/virendra-pilaniya",
  resume:
    "https://drive.google.com/file/d/1FGng3yL27cqc9V-40Y2wgJEVXZhIo0eO/view",
  linkedin: "https://www.linkedin.com/in/virendra-pilaniya-1a978b1b1/",
  twitter: "https://twitter.com/VirendraPilani1",
  insta: "https://www.instagram.com/virendrapilaniya/",
  facebook: "https://www.facebook.com/virendra.pilaniya.7",
};

export const skills = [
  {
    title: "Backend",
    skills: [

      {
        name: "Django",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&amp;s",
      },

      {
        name: "Rails",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/2560px-Ruby_On_Rails_Logo.svg.png"
      },

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      
      
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
    ],
  },

  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },

      {
        name: "C",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
      },

      {
        name: "C++",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQES6uMo7A9fEcHvIPZPjqzDPXcIj6t3ijorXvpnGU7GA&s",
      },

      {
        name: "Ruby",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRYcRiowc7Gv-daWRi0tKJ3pLFgDO6BfLJUh2-sA9Lw&s",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "SQL",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "data:image/png;base64,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",
    role: "Software Development Engineer - 1",
    company: "Cogoport Pvt. Ltd.",
    date: "Sept 2023 - Present",
    desc: "Migrated shipment services to microservices, resulting in a 40% decrease in processing time. Additionally, I've developed tools for managing supplier locations and improved platform communication, driving efficiency and collaboration.",
    skills: [
      "Django",
      "React",
      "Python",
      "Javascript",
      "ROR",
    ],
  },
  {
    id: 0,
    img: "data:image/png;base64,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",
    role: "Backend Developer Intern",
    company: "GK Infotech",
    date: "May 2022 - July 2022",
    desc: "Developed a Communication Practicing Android App using Django, integrating WebRTC and Web Socket. I also created backend models for users, creators, and lessons using Django.",
    skills: [
      "Django",
      "Python",
      "AWS",
    ],
  },
  {
    id: 1,
    img: "data:image/jpeg;base64,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",
    role: "Frontend Developer Intern",
    company: "Vedasis Analytics",
    date: "Dec 2021 - Jan 2022",
    desc: "Built an authentication system using React and Firebase. I also integrated Razorpay for secure payments and implemented premium user functionality using React and the Razorpay API.",
    skills: [
      "ReactJS",
      "Redux",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Razorpay API",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://diciitbhu.com/wp-content/uploads/2018/06/iit-bhu.png",
    school: "Indian Institute of Technology, Varanasi (B.H.U)",
    date: "Aug 2019 - May 2023",
    grade: "8.17 CGPA",
    degree: "Bachelor of Technology - BTech, Metallurgical Engineering",
  },
  {
    id: 1,
    img: "https://az704457.vo.msecnd.net/img/esstoragesv2/72442_d0dc.png?Square60x60",
    school: "Navjeevan Shikshan Sansthan, Sikar",
    date: "Aug 2017 - July 2019",
    grade: "86.20%",
    degree: "RBSE(XII), Science with Mathematics",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/a/a4/BSER-Logo.png",
    school: "Ratan Devi Sethia Public School Sujangarh, Rajasthan",
    date: "Aug 2016 - May 2017",
    grade: "91.30%",
    degree: "RBSE(X)",
  },
];

export const projects = [
  {
    id: 9,
    title: "KnockOut-Voice",
    date: "Jan 2024 - Feb 2024",
    description:
      "A WebApp that provides platform for Boxing lovers around the world join Live-fight rooms, and have discusion about the on-going live events",
    // image:
    //   "https://private-user-images.githubusercontent.com/80153001/306409370-9e2f7d17-84fa-436b-afa2-1e6349db3b3d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA0MTU2MzEsIm5iZiI6MTcxMDQxNTMzMSwicGF0aCI6Ii84MDE1MzAwMS8zMDY0MDkzNzAtOWUyZjdkMTctODRmYS00MzZiLWFmYTItMWU2MzQ5ZGIzYjNkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzE0VDExMjIxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI1ZDcyYzcxN2ZhMDBlZmYyM2M1YWQzYWY3N2RjMmNiNTFlMmVjOTIzM2EwZDc3OTYyOTNjMDQ3NmQ5Y2NmMzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0OtHlNhaNpLvgpnYu8zBnYDLDHcmFsoxjus-0u81sI8",
    image: "https://github.com/virendra-pilaniya/my_portfolio/blob/gh-pages/static/media/knockOut.37570c13be4b7c991d60.png?raw=true",

    tags: [
      "React",
      "Django",
      "Python",
      "Javascript",
      "Vercel",
      "PythonAnywhere",

    ],
    category: "web app",
    github: "https://github.com/virendra-pilaniya/KnockTalk-Voice",
    webapp: "https://knockout.pythonanywhere.com/",
  },
  {
    id: 0,
    title: "Connect-With-Expert",
    date: "Jan 2023 - Mar 2023",
    description:
      "Connect-With-Expert: A React-based web app connecting juniors with expert mentors. Features include a curated list of seniors by expertise and a self-mailing system powered by Google SMTP, fostering seamless communication and guidance exchange.",
    image:
      "https://github.com/virendra-pilaniya/my_portfolio/blob/gh-pages/static/media/connect_with_expert.c90656c15401e60d8a0d.png?raw=true",
    tags: ["React Js", "Javascript", "HTML", "CSS", "Firebase", "Material UI"],
    category: "web app",
    github: "https://github.com/virendra-pilaniya/ConnectWithExpert",
    webapp: "https://connect-with-expert.netlify.app/",
  },
  {
    id: 1,
    title: "ContentVerse",
    date: "May 2023 - Aug 2023",
    description:
      "Introducing a Ruby on Rails CMS designed for content creation, monetization, and community engagement. This system enables seamless CRUD operations for users and posts, integrates advanced search, filtering, and post analytics for improved content performance, and incorporates user following, recommendations, and Razorpay integration for effortless content monetization.",
    image:
      "https://github.com/virendra-pilaniya/my_portfolio/blob/gh-pages/static/media/contentverse.922a120f8ddab0ffa5c6.png?raw=true",
    tags: [
      "Ruby",
      "Rails",
      "Rails ORM",
      "HTML",
      "CSS",
    ],
    category: "web app",
    github: "https://github.com/virendra-pilaniya/Backend-Rails-Medium/tree/master",
    webapp: "https://github.com/virendra-pilaniya/Backend-Rails-Medium/tree/master",
  },
  {
    id: 2,
    title: "Movie-Listing-App",
    date: "July 2023 - July 2023",
    description:
      "Introducing a movie search app powered by the OMDB API, featuring a user-friendly interface and comprehensive functionality. Users can easily search for movies, access detailed information including duration, director name, and genre, and provide ratings and comments. The app stores ratings and comments locally using localStorage, ensuring personalized experiences across sessions. Additionally, it offers pagination with intuitive navigation buttons, enhancing the browsing experience for users.",
    image:
      "https://github.com/virendra-pilaniya/my_portfolio/blob/gh-pages/static/media/Movie_app.c8e9427804ffff240543.png?raw=true",
    tags: ["Javacript", "HTML", "CSS", "OMDB API"],
    category: "web app",
    github: "https://github.com/virendra-pilaniya/Movie-Listing-App",
    webapp: "https://virendra-pilaniya.github.io/Movie-Listing-App/",
  },
  {
    id: 3,
    title: "Todo-ist",
    date: "Mar 2023 - Apr 2023",
    description:
      "(Not normal todo -list)This todo list project offers a comprehensive set of features for efficient task management. Users can seamlessly add, edit, and delete tasks, mark them as done or undone, categorize them with priorities and categories, and utilize filters and sorting options for better organization. Additionally, the application supports subtasks, tags, and robust search functionalities. Tasks are stored locally for persistence, and users receive reminders for important deadlines. With activity logs and the ability to view backlogs, our application ensures users stay on top of their tasks with ease and efficiency.",
    image:
      "https://github.com/virendra-pilaniya/my_portfolio/blob/gh-pages/static/media/todoist.ace08eaf8352bd6a65bf.png?raw=true",
    tags: ["Javacript", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/virendra-pilaniya/To-do-list",
    webapp: "https://virendra-pilaniya.github.io/To-do-list/",
  },
  {
    id: 10,
    title: "Prastuti Meta Fest",
    date: "Jun 2021 - Jul 2021",
    description:
      "As the backend developer for the Meta Fest WebApp, I created a platform that enabled over 450 teams from across India to collaborate seamlessly. Using Django, I built a system for nationwide team formation, along with an Admin page for easy team management and a user dashboard for enhanced functionality. Additionally, I integrated SMTP for effective workshop communication, making the WebApp a user-friendly solution for event coordination.",
    image:
      "https://github.com/virendra-pilaniya/my_portfolio/blob/gh-pages/static/media/prastuti.13fb0cdbd825a45becf7.png?raw=true",
    tags: ["Django", "Python", "Axios", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/virendra-pilaniya/prastuti-meta-fest",
    webapp: "https://github.com/virendra-pilaniya/prastuti-meta-fest",
  },
  
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
