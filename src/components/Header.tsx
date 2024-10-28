import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Porfolio.
        </a>

        <nav className="navbar">
          <NavLink to="/" className="a active">
            Home
          </NavLink>
          <NavLink to={"/Projects"} className="a">
            About me
          </NavLink>
          <NavLink to={"/Projects"} className="a">
            Projects
          </NavLink>
          <NavLink to={"/Projects"} className="a">
            Contact
          </NavLink>
          <NavLink to={"/Projects"} className="a">
            Skills
          </NavLink>
        </nav>
        <div className="bx bx-moon" id="darkMode-icon"></div>
      </header>
    </>
  );
};
