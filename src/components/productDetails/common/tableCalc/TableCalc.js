import React from "react";

const TableCalcNumber = ({ product, maxSum, avgSum, minSum }) => {
  return (
    <tr className="trData">
      <td>{product}</td>
      <td className="taright">{maxSum}</td>
      <td className="taright">{avgSum}</td>
      <td className="taright">{minSum}</td>
    </tr>
  );
};

const TableCalc = ({ product, maxSum, avgSum, minSum }) => {
  return (
    <div className="tableCalc">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th className="taright">Max Price</th>
            <th className="taright">Average Price</th>
            <th className="taright">Min Price</th>
          </tr>
        </thead>
        <tbody>
          <TableCalcNumber
            product={product}
            maxSum={maxSum}
            avgSum={avgSum}
            minSum={minSum}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TableCalc;
