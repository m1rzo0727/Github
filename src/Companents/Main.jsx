import React from "react";

const Main = () => {
  return (
    <section id="main-section">
      <div className="container main-content">
        <div className="main-img">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="main-header">
          <h2 className="main-fullname">Humoyun Mirzo</h2>
          <a href="" className="main-username">
            @m1rzo0727
          </a>
          <h4 className="main-info">Abdurasuljonov Humoyun Mirzo</h4>
          <p className="main-join">
            Joined <span className="main-data">27 July 2004</span>{" "}
          </p>
          <div className="main-main">
            <h1 className="main-repostText">
              Repost
              <span className="main-repost">07 </span>
            </h1>
            <h1 className="main-followerText">
              Followers
              <span className="main-follower">27</span>
            </h1>
            <h1 className="main-followingText">
              Following
              <span className="main-following">2004</span>
            </h1>
          </div>
          <div className="main-footer">
            <div className="address-box">
              <i class="fa-solid fa-location-dot address-icon"></i>
              <span className="address-title">Andijon</span>
            </div>
            <div className="twitter-box">
              <i class="fa-brands fa-twitter"></i>
              <span className="twitter-title">@m1rzo_0727</span>
            </div>
            <div className="source-box">
              <i class="fa-solid fa-link"></i>
              <span className="source-title">2255</span>
            </div>
            <div className="job-box">
              <i class="fa-solid fa-city"></i>
              <span className="job-title">Najot Ta`lim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
