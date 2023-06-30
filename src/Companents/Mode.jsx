import React from "react";

const Mode = () => {
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
          />
          <span>Dark</span>
          <i class="fa-solid fa-moon mode-icon"></i>
        </label>
      </div>
    </section>
  );
};

export default Mode;
