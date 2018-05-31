import React from "react";

const ButtonConfiguration = ({
  children,
  searchTerm,
  onSearchChange,
  handleReport
}) => {
  return (
    <div className="btnConfiguration">
      <div className="searchField">
        <input type="text" value={searchTerm} onChange={onSearchChange} />
      </div>
      <div className="buttons">
        {children}
        <div className="createReport">
          <button className="btn" onClick={handleReport}>
            Create Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonConfiguration;
