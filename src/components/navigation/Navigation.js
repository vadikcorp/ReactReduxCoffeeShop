import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="rectangle" />
      <nav>
        <div className="nav_up">
          <ul>
            <li>
              <a href="/">
                <i className="fa fa-home" />
              </a>
            </li>
            <li>
              <i className="fa fa-th-large" />
            </li>
            <li>
              <i className="fa fa-signal" />
            </li>
            <li>
              <i className="fa fa-bookmark" />
            </li>
            <li>
              <i className="fa fa-file" />
            </li>
            <li>
              <i className="fa fa-question-circle" />
            </li>
          </ul>
        </div>
        <div className="nav_down">
          <li>
            <i className="fa fa-cog" />
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
