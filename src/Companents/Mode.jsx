import React from "react";

const Mode = () => {
  //
  const darkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const lightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.cheched) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <section id="mode-section">
      <div className="container mode-content">
        <span className="mode-title">devfinder</span>
        <label htmlFor="mode-switch" className="mode-switch">
          <input
            type="checkbox"
            id="mode-switch"
            name="mode-switch"
            className="mode-input"
            onChange={toggleTheme}
          />
          <span className="mode-text">Dark</span>
          <i className="fa-solid fa-moon mode-icon"></i>
        </label>
      </div>
    </section>
  );
};

export default Mode;
