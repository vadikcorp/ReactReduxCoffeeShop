import React from "react";

const BtnFooter = ({
  handleReport,
  sendReport,
  emailItems,
  product,
  tableData,
  valueFrom,
  valueTo
}) => {
  return (
    <div className="field_block sendData">
      <button className="btnCancel" onClick={handleReport}>
        Cancel
      </button>
      <button
        className="btn"
        onClick={() =>
          sendReport(emailItems, product, tableData, valueFrom, valueTo)
        }
      >
        Create
      </button>
    </div>
  );
};

export default BtnFooter;
