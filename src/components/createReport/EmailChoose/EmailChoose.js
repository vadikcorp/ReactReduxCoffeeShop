import React from "react";

const EmailChoose = ({
  emailItems,
  handleRemoveEmailItems,
  emailInputStatus,
  handleChange,
  handleEmailInputKeyDown,
  emailInputStatusBtn,
  emailInput
}) => {
  return (
    <div className="field_block">
      <p className="field_head_p">Email</p>
      <label>
        <ul>
          {emailItems.map((item, i) => (
            <li
              key={i}
              className="btn"
              onClick={() => handleRemoveEmailItems(i)}
            >
              <span>(x)</span>
              {item}
            </li>
          ))}

          {emailInputStatus ? (
            <input
              autoFocus
              value={emailInput}
              name="emailInput"
              onChange={handleChange}
              onKeyDown={handleEmailInputKeyDown}
            />
          ) : null}

          <button className="btn" onClick={emailInputStatusBtn}>
            +
          </button>
        </ul>
      </label>
    </div>
  );
};

export default EmailChoose;
