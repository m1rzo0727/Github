import React from "react";

const Error = ({ data }) => {
  console.log(data);
  return (
    <section id="error-section">
      <div className="error-content">
        <h1 className="error-title">{data.message}</h1>
      </div>
    </section>
  );
};

export default Error;
