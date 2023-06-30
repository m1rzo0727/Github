import React from "react";

const Search = () => {
  return (
    <section id="search-section">
      <form className="container search-content">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          id=""
          name=""
          type="search"
          className="search-input"
          placeholder="Search GitHub username…"
        />
        <button className="search-button">Search</button>
      </form>
    </section>
  );
};

export default Search;
