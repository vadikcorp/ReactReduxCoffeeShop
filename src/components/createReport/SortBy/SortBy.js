import React from "react";

const SortBy = ({ isButtonActive, onActiveClassName }) => {
  return (
    <div className="field_block">
      <p className="field_head_p">Sort By</p>
      <div className="btnField">
        {isButtonActive.map((el, index) => (
          <button
            key={index}
            onClick={() => onActiveClassName(index)}
            className={`btn ${el.isActive ? "activeBtn" : ""}`}
          >
            {el.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
