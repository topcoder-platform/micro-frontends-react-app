/**
 * React app side menu structure
 */
import reactIcon from "../assets/images/react-grey.svg";
import reactActiveIcon from "../assets/images/react-green.svg";
import homeIcon from "../assets/images/home.svg";
import homeActiveIcon from "../assets/images/home-green.svg";

const appMenu = [
  {
    title: "React App",
    path: "/micro-frontends-react-route",
    icon: reactIcon,
    activeIcon: reactActiveIcon,
  },
  {
    title: "Home",
    path: "/micro-frontends-react-route/home",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
];

export default appMenu;
