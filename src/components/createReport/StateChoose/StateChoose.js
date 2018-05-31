import React from "react";

const StateChoose = ({
  stateItems,
  stateInput,
  handleChange,
  handleRemoveStateItem,
  handleStateKeyDown
}) => {
  return (
    <div className="field_block">
      <p className="field_head_p">State</p>
      <label>
        <ul>
          {stateItems.map((item, i) => (
            <li
              key={i}
              className="btn"
              onClick={() => handleRemoveStateItem(i)}
            >
              <span>(x)</span>
              {item}
            </li>
          ))}

          {stateItems.length === 0 ? (
            <input
              value={stateInput}
              name="stateInput"
              onChange={handleChange}
              onKeyDown={handleStateKeyDown}
            />
          ) : null}
        </ul>
      </label>
    </div>
  );
};

export default StateChoose;
