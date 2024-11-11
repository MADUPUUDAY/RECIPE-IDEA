import React from "react";
import "./MoreLinks.css"; 

const MoreLinks = ({ youtubeLink, mealName }) => {
  return (
    <div className="more-links">
      <h3>More Resources</h3>
      
      
      {youtubeLink && (
        <p>
          Watch on YouTube:{" "}
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            {mealName} Tutorial
          </a>
        </p>
      )}

      
      <p>
        Learn more about {mealName} on{" "}
        <a
          href={`https://en.wikipedia.org/wiki/${mealName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default MoreLinks;
