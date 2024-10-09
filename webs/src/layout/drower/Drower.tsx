import "./deower.scss";
import appLogo from "../../assets/Ck-temp-logo-white2.webp";

import { NavLink } from "react-router-dom";
import { drowerItems } from "../../constants/DrowerData";
const Drower = () => {
  return (
    <div className="drower-container">
      <img src={appLogo} alt="App Logo" />

      <div className="element">
        {drowerItems.map((item, index) => (
          <NavLink to={item.path} className="item" key={index}>
            {item.icon}
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Drower;
