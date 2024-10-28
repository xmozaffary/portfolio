import { NavLink } from "react-router-dom";

export const HeroSectionLeft = () => {
  return (
    <>
      <div className="home__content">
        <h3>Hello, I am</h3>
        <h1>Ali Rezai</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          architecto optio soluta, recusandae explicabo corporis laborum.
        </p>
        <div className="home__content--socialMedia">
          <NavLink className="a" to={"#"}>
            <i className="bx bxl-linkedin"></i>
          </NavLink>
          <NavLink className="a" to={"#"}>
            <i className="bx bxl-github"></i>
          </NavLink>
          <NavLink className="a" to={"#"}>
            <i className="bx bxl-instagram-alt"></i>
          </NavLink>
          <NavLink className="a" to={"#"}>
            <i className="bx bxl-twitter"></i>
          </NavLink>
        </div>
        <NavLink to={"#"} className="home__content--btn">
          Download CV
        </NavLink>
      </div>
    </>
  );
};
