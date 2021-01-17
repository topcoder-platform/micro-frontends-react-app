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
    title: "Auth Demo",
    path: "/micro-frontends-react-route/auth",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
  {
    title: "No Sidebar Demo",
    path: "/micro-frontends-react-route/no-sidebar",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
  {
    title: "View All Notifications",
    path: "/notifications",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  }
];

export default appMenu;
