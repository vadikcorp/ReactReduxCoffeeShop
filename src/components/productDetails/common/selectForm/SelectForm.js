import React from "react";

const Select = ({ style, className, value, name, onChange, arrWeek }) => {
  return (
    <select
      style={style}
      className={className}
      value={value}
      name={name}
      onChange={onChange}
    >
      <option style={style} className={className}>
        Select
      </option>
      {arrWeek[0] &&
        arrWeek[0].map((el, i) => (
          <option style={style} className={className} key={i} value={el}>
            {el}
          </option>
        ))}
    </select>
  );
};

const SelectForm = ({
  productPriceWeek,
  data,
  currProductPriceWeek,
  storeProductsData,
  valueFrom,
  valueTo,
  setValuePicker,
  handleChange
}) => {
  let styles = {
    color: "#232323",
    fontFamily: "Montserrat",
    fontSize: "14px",
    lineHeight: "20px"
  };
  let optionStyle = {
    backgroundColor: "rgba(87, 89, 159, 0.05)",
    color: "#504dd4",
    marginRight: "10px"
  };
  const refreshData = () => {
    // concat P to the name of variale, couz warnings in console
    let productPriceWeekP = productPriceWeek;
    let indexFrom = productPriceWeekP[0].indexOf(valueFrom);
    let indexTo = productPriceWeekP[0].indexOf(valueTo);
    let slice = productPriceWeekP[0].slice(indexFrom, indexTo + 1);

    // console.log("refreshData");
    let dataP = data;
    const productsData = dataP.data;

    let returnData = productsData.map(element =>
      element.pricingDataByWeek.filter((el, i) =>
        slice.some(elem => elem === el.week)
      )
    );
    let newData = dataP.data.map(
      (el, i) => (el.pricingDataByWeek = returnData[i])
    );
    storeProductsData(dataP, newData);
  };
  return (
    <div className="dataPicker">
      <label>
        <span style={styles}>From: </span>
        <Select
          style={optionStyle}
          className="btn"
          value={valueFrom}
          name="valueFrom"
          onChange={handleChange}
          arrWeek={currProductPriceWeek}
        />
        <span style={styles}> To: </span>
        <Select
          style={optionStyle}
          className="btn"
          value={valueTo}
          name="valueTo"
          onChange={handleChange}
          arrWeek={currProductPriceWeek}
        />
      </label>
      <button
        disabled={valueFrom.length && valueTo.length ? false : true}
        onClick={refreshData}
        className="btn"
      >
        Refresh Table
      </button>
    </div>
  );
};

export default SelectForm;
