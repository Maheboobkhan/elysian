import React, { Component } from "react";
import { useState } from "react";
import "../component/Travel.css";
import { useNavigate } from "react-router-dom";

function Travel({ travel, sideone, post }) {
  const navigate = useNavigate();
  // for component 1
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [commentText, setCommentText] = useState("");

  // for component 1
  const toggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };
  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setCommentCount(commentCount + 1);
      setCommentText("");
    }
  };

  const goToNewyorkPage = () => {
    navigate("/newyork");
  };

  const goToLondonPage = () => {
    navigate("/london");
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="main">
        <div className="info-container">
          <h1 className="info-title">My Blog</h1>
          <p className="info-description">Welcome to the blog of unknown.</p>
        </div>
        {travel.map((ele) => {
          return (
            <div className="component-1">
              <img
                src={ele.image}
                alt="Article"
                className="component-1-image"
              />
              <h1 className="component-1-title">{ele.title}</h1>
              <p className="component-1-description">{ele.description}</p>
              <p className="component-1-para">{ele.para}</p>
              <div className="buttons">
                <div className="readmore-greater">
                  <button className="read-more">Read More </button>
                  <span className="greater">>></span>
                </div>
                <div className="comment-button-count">
                  <button className="comment-button" onClick={toggleCommentBox}>
                    {showCommentBox ? "Hide Comment" : "Comment"}
                  </button>
                  <span className="comment-count">{commentCount}</span>
                </div>
              </div>
              {showCommentBox && (
                <div>
                  <textarea
                    className="comment-textarea"
                    placeholder="Enter your comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    className="submit-button"
                    onClick={handleCommentSubmit}
                  >
                    Submit Comment
                  </button>
                </div>
              )}
            </div>
          );
        })}

        <div className="another-side">
          {/* 3rd component */}
          {sideone.map((ele) => {
            console.log("side" + ele);
            return (
              <div className="component-3-image-box">
                <img
                  src={ele.image}
                  alt="image"
                  className="component-3-image"
                />
                <h2 className="component-3-title">{ele.title}</h2>
                <p className="component-3-description">{ele.description}</p>
              </div>
            );
          })}

          {/* 4th component */}
          <div className="popular-posts">
            <h1>Popular Posts</h1>
            <div className="post-container">
              {post.map((ele) => (
                <div className="post">
                  <img
                    src={ele.imageUrl}
                    alt={ele.title}
                    className="post-image"
                  />
                  <div className="title-tagline">
                    <h2 className="post-title">{ele.title}</h2>
                    <p className="post-tagline">{ele.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5th component */}
          <div className="box-container">
            <h2>Tag</h2>
            <hr />
            <div className="button-container">
              <button className="grey-button" onClick={goToNewyorkPage}>
                New York
              </button>

              <button className="travel">Travel</button>

              <button className="grey-button" onClick={goToLondonPage}>
                London
              </button>
              <button className="grey-button" onClick={goToHomePage}>
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pn-button-container">
        <button className="prev-button" title="Previous">
          Previous
        </button>
        <button className="next-button" title="Next">
          Next >>
        </button>

        <span className="footer">
          Powered by
          <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
        </span>
      </div>
    </>
  );
}

export default Travel;
