import React from "react";

const CityChoose = ({
  items,
  input,
  handleChange,
  handleRemoveItem,
  handleInputKeyDown
}) => {
  return (
    <div className="field_block city_block">
      <p className="field_head_p">City</p>
      <label>
        <ul>
          {items.map((item, i) => (
            <li key={i} className="btn" onClick={() => handleRemoveItem(i)}>
              <span>(x)</span>
              {item}
            </li>
          ))}

          <input
            value={input}
            name="input"
            onChange={handleChange}
            onKeyDown={handleInputKeyDown}
          />
        </ul>
      </label>
    </div>
  );
};

export default CityChoose;
