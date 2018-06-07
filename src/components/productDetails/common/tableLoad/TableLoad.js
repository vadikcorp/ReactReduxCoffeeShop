import React from "react";

const TableLoadNumber = ({
  index,
  productsName,
  productsMaxSumTotal,
  productsMinSumTotal,
  tableData
}) => {
  const maxSum = tableData.map(el => el.productsMaxSum);
  const minSum = tableData.map(el => el.productsMinSum);
  const avg = tableData.map(el => el.productsAverage);
  let stylesMax = {
    color: productsMaxSumTotal === maxSum[index] ? "rgba(80, 77, 212, .8)" : ""
  };
  let stylesMin = {
    color: productsMinSumTotal === minSum[index] ? "rgba(80, 77, 212, .8)" : ""
  };
  return (
    <tr className="trData">
      <td>{productsName}</td>
      <td style={stylesMax} className="taright">{`$${maxSum[index]}`}</td>
      <td className="taright">{`$${avg[index]}`}</td>
      <td style={stylesMin} className="taright">{`$${minSum[index]}`}</td>
    </tr>
  );
};

const TableLoad = ({
  tableData,
  productsMaxSumTotal,
  productsMinSumTotal,
  searchTerm,
  sortBy,
  sortStatus
}) => {
  const isSearched = searchTerm => item => {
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const data = tableData.map(el => el.bannersName);

  return (
    <div className="tableLoad">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th onClick={() => sortBy("productsMaxSum")} className="taright">
              <i
                className={`fa fa-${
                  sortStatus.productsMaxSum === "asc" ? "sort-up" : "sort-down"
                }`}
              />
              Max Price
            </th>
            <th onClick={() => sortBy("productsAverage")} className="taright">
              <i
                className={`fa fa-${
                  sortStatus.productsAverage === "asc" ? "sort-up" : "sort-down"
                }`}
              />
              Average Price
            </th>
            <th onClick={() => sortBy("productsMinSum")} className="taright">
              <i
                className={`fa fa-${
                  sortStatus.productsMinSum === "asc" ? "sort-up" : "sort-down"
                }`}
              />
              Min Price
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(isSearched(searchTerm))
            .map((item, id) => (
              <TableLoadNumber
                key={id}
                productsName={item}
                index={id}
                productsMaxSumTotal={productsMaxSumTotal}
                productsMinSumTotal={productsMinSumTotal}
                tableData={tableData}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLoad;
