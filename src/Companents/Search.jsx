import React from "react";
import { useState } from "react";

const Search = ({ setData }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyDown = async (e) => {
    if (e.key == "Enter") {
      const res = await fetch(`https://api.github.com/users/${value}`);

      const data = await res.json();

      setData(data);
    }
  };

  return (
    <section id="search-section">
      <div className="container search-content">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          id=""
          name=""
          value={value}
          type="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="search-input"
          placeholder="Search GitHub username…"
        />
        <button className="search-button">Search</button>
      </div>
    </section>
  );
};

export default Search;
