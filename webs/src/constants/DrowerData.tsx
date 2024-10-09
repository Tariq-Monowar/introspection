import { LuLayoutDashboard, LuDog, LuBook } from "react-icons/lu";
import {
  FaComments,
  FaServicestack,
  FaCalendarAlt,
  FaChartLine,
  FaFileAlt,
  FaPaw,
  FaUsersCog,
  FaCog,
} from "react-icons/fa";

export const drowerItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LuLayoutDashboard className="icon" />,
  },
  { name: "Dogs", path: "/dogs", icon: <LuDog className="icon" /> },
  { name: "Book", path: "/book", icon: <LuBook className="icon" /> },
  { name: "Chat", path: "/chat", icon: <FaComments className="icon" /> },
  {
    name: "Services",
    path: "/services",
    icon: <FaServicestack className="icon" />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <FaCalendarAlt className="icon" />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <FaChartLine className="icon" />,
  },
  {
    name: "Client Report",
    path: "/client-report",
    icon: <FaFileAlt className="icon" />,
  },
  {
    name: "Rescue Dogs",
    path: "/rescue-dogs",
    icon: <FaPaw className="icon" />,
  },
  {
    name: "Community",
    path: "/community",
    icon: <FaUsersCog className="icon" />,
  },
  { name: "Settings", path: "/settings", icon: <FaCog className="icon" /> },
];
