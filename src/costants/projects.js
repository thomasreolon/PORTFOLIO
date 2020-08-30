import { ImgAma, ImgNet, ImgSol } from "../components/Images"

const projects = {
  amazon: {
    name: "Amazon Clone",
    link: "https://mern-stack-exercice.web.app/",
    description: `Webapp developed using React.js and firebase to imitate Amazon.`,
    tags: ["frontend"],
    Img: ImgAma,
  },
  netflix: {
    name: "Netflix Clone",
    link: "https://netflix-clone-12f4b.web.app/",
    description: `Webapp developed using React.js to imitate Netflix.`,
    tags: ["frontend"],
    Img: ImgNet,
  },
  solar: {
    name: "Landing Page",
    link: "https://practical-franklin-f298b9.netlify.app/",
    description: `A Landing Page developed using Webpack from scratch.`,
    tags: ["frontend"],
    Img: ImgSol,
  },
}

export { projects }
