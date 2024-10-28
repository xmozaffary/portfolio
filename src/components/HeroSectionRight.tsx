export const HeroSectionRight = () => {
  return (
    <>
      <div className="home__profession--container">
        <div className="profession--box">
          <div className="profession" style={{ "--i": 0 } as any}>
            <i className="bx bxl-java"></i>
            <h3>Java Developer</h3>
          </div>
          <div className="profession" style={{ "--i": 1 } as any}>
            <i className="bx bx-code-alt"></i>
            <h3>Web Developer</h3>
          </div>
          <div className="profession" style={{ "--i": 2 } as any}>
            <i className="bx bxl-react"></i>
            <h3>React Developer</h3>
          </div>
          <div className="profession" style={{ "--i": 3 } as any}>
            <i className="bx bx-git-branch"></i>
            <h3>git Developer</h3>
          </div>
          <div className="circle"></div>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
};
