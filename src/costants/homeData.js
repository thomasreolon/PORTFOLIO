import { LinkedIn, GitHub } from "@material-ui/icons"
import links from "./links"

export default {
  links: [
    {
      name: "Contact Me",
      link: links.CONTACT,
    },
    {
      name: "See my CV",
      link: links.CV,
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ],
  extLinks: [
    {
      link: "https://github.com/thomasreolon",
      Icon: GitHub,
    },
    {
      link: "https://www.linkedin.com/in/thomas-reolon-9270971a3/",
      Icon: LinkedIn,
    },
  ],
  descriptionBig: "Hi, I'm Thomas, a software engineer",
  descriptionSmall: "Hi, I'm Thomas",
}
