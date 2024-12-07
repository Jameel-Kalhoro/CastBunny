import React from "react";
import "./Developer.css";

const Developer = () => {
  return (
    <div className="developerWrap">
      <div className="developerHeading">Welcome to Developer Portal</div>
      <div className="developerDetails">
        <p>
          These Developer pages are designed for those interested in developing
          and integrating third party application with the CastBunny ecosystem.
        </p>
        <div className="developerBtn">
          <button>Manage Application</button>
          <button>Read Documentation</button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
