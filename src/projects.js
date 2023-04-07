import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiReactrouter,
  SiCss3,
} from "react-icons/si";

const toolIconTailwindClasses =
  "cursor-pointer hover:scale-105 hover:text-redOrange3 duration-200 transition";

const projectsArray = [
  // All styles are set with tailwind!

  {
    codeLink: "https://github.com/Xaida02/cavewatch-app-xaida02",
    pageLink: "https://cavewatch-movies-xaida02.netlify.app/",
    id: 1,
    img: "./assets/netflix.png",
    name: "Netflix imitation page",
    desc: (
      <>
        This project is a Page based in the web version of netflix, it makes
        uses of the amb api and fecth's data into the user interface. It also
        features some back end quirks and allows the user to sign Up and save
        any show he wants for later.
      </>
    ),
    toolsUsedIcons: (
      <>
        <SiFirebase className={toolIconTailwindClasses} />
        <FaReact className={toolIconTailwindClasses} />
        <SiTailwindcss className={toolIconTailwindClasses} />
        <SiReactrouter className={toolIconTailwindClasses} />
      </>
    ),
    // projectWidth: `sm:w-[70%] w-full`,
  },
  {
    codeLink: "https://github.com/Xaida02/argentinan-restaurant-app",
    pageLink: "https://argentinian-restaurant-xaida02.netlify.app/",
    id: 2,
    img: "./assets/tours.png",
    name: "Tours in Argentina",
    desc: (
      <>
        This page is a tours that presents different parts of the vast
        argentinian territory, the home page has an slider for the user to chose
        which tour he prefers and sent him to some specific province page that
        display more info
      </>
    ),
    toolsUsedIcons: (
      <>
        <SiReactrouter className={toolIconTailwindClasses} />{" "}
        <FaReact className={toolIconTailwindClasses} />{" "}
        <SiCss3 className={toolIconTailwindClasses} />
      </>
    ),
    // projectWidth: `w-full`,
  },
  {
    codeLink: "https://github.com/Xaida02/argentina-travel-app",
    pageLink: "https://xaida02-argentina-travel-app.netlify.app/",
    id: 3,
    img: "./assets/camping.png",
    name: "Camping guide introduction",
    desc: (
      <>
        This is a page that serves as an introduction to an in person camping
        guide, making use of some colorfoul vectors an responsive animations
        that renders in the page via javaScript built in intersection observer
        api.
      </>
    ),
    toolsUsedIcons: (
      <>
        <FaReact className={toolIconTailwindClasses} />
        <SiTailwindcss className={toolIconTailwindClasses} />
      </>
    ),
    // projectWidth: `sm:w-[40%] w-full`,
  },
  {
    codeLink: "https://github.com/Xaida02/argentinan-restaurant-app",
    pageLink: "https://argentinian-restaurant-xaida02.netlify.app/",
    id: 4,
    img: "./assets/food.png",
    name: "Food restaurant",
    desc: (
      <>
        This is a restaurant app where the user can search and choose his
        favourite food and add it to his cart, he can filter which type of food
        he wants depending of the type or price of it.
      </>
    ),
    toolsUsedIcons: (
      <>
        <FaReact className={toolIconTailwindClasses} />
        <SiTailwindcss className={toolIconTailwindClasses} />
        <SiReactrouter className={toolIconTailwindClasses} />
      </>
    ),
    // projectWidth: `sm:w-[60%] w-full`,
  },
  {
    codeLink: "https://github.com/Xaida02/anime-index-react",
    pageLink: "https://xaida02-anime-index.netlify.app/",
    id: 5,
    img: "./assets/anime.png",
    name: "Anime index",
    desc: (
      <>
        This is an index of all anime shows making use of the myAnimeList api.
        The user can search any anime he wants to get useful information about
        it, such as episodes, airing and synopsis.
      </>
    ),
    toolsUsedIcons: (
      <>
        <FaReact className={toolIconTailwindClasses} />
        <SiReactrouter className={toolIconTailwindClasses} />
        <SiCss3 className={toolIconTailwindClasses} />
      </>
    ),
    // projectWidth: `sm:w-[30%] w-full`,
  },
];

export default projectsArray;
