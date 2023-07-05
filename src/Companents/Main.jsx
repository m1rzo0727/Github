import React from "react";

const Main = ({ data }) => {
  let joined = data.created_at;
  let link = data.url;
  return (
    <section id="main-section">
      {data.message ? null : (
        <div className="container main-content">
          <div className="main-img">
            {data.avatar_url ? <img src={data.avatar_url} alt="" /> : null}
          </div>
          <div className="main-header">
            {data.name ? <h2 className="main-fullname">{data.name}</h2> : null}

            {data.login ? (
              <a href={data.html_url} className="main-username">
                {data.login}
              </a>
            ) : null}

            {data.bio ? <h4 className="main-info">{data.bio}</h4> : null}
            {data.created_at ? (
              <p className="main-join">
                Joined <span className="main-data">{joined.slice(0, 10)}</span>
              </p>
            ) : null}

            <div className="main-main">
              <h1 className="main-repostText">
                Repost
                <span className="main-repost"> {data.public_repos}</span>
              </h1>
              <h1 className="main-followerText">
                Followers
                <span className="main-follower">{data.followers}</span>
              </h1>
              <h1 className="main-followingText">
                Following
                <span className="main-following">{data.following}</span>
              </h1>
            </div>
            <div className="main-footer">
              {data.location ? (
                <div className="address-box">
                  <i className="fa-solid fa-location-dot address-icon"></i>
                  <span className="address-title">{data.location}</span>
                </div>
              ) : null}
              {data.twitter_username ? (
                <div className="twitter-box">
                  <i className="fa-brands fa-twitter"></i>
                  <a
                    href={`https://twitter.com/${data.twitter_username}`}
                    className="twitter-title"
                  >
                    {data.twitter_username}
                  </a>
                </div>
              ) : null}
              {data.url ? (
                <div className="source-box">
                  <i className="fa-solid fa-link"></i>
                  <a href={data.url} className="source-title">
                    {link.slice(29, 50)}
                  </a>
                </div>
              ) : null}
              {data.company ? (
                <div className="job-box">
                  <i className="fa-solid fa-city"></i>
                  <span className="job-title">{data.company}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
