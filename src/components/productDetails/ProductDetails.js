import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ButtonConfiguration from "./common/buttonConfiguration";
import ProductHeader from "./common/productHeader";
import SelectForm from "./common/selectForm";
import TableCalc from "./common/tableCalc";
import TableLoad from "./common/tableLoad";
import CreateReport from "../createReport";

import {
  loadingToggle,
  storeData,
  storeProduct,
  storeTableData,
  storeProductsMaxSumTotal,
  storeProductsMinSumTotal,
  storeProductsAverageTotal,
  storeProductPriceWeek,
  storeCurrProductPriceWeek,
  onSearchChange,
  createReport,
  valueFrom,
  valueTo,
  handleChange,
  setDirectionSort
} from "../../actions/productDetails";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.storeProductsData = this.storeProductsData.bind(this);
    this._sortBy = this._sortBy.bind(this);
    this._onSearchChange = this._onSearchChange.bind(this);
    this._handleReport = this._handleReport.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    return (
      <div className="hero loader">
        {!this.props.productDetails.isLoading ? (
          <div className="productDetails">
            <div className="container">
              <ProductHeader product={this.props.productDetails.product} />
              <TableCalc
                product={this.props.productDetails.product}
                maxSum={this.props.productDetails.productsMaxSumTotal}
                avgSum={this.props.productDetails.productsAverageTotal}
                minSum={this.props.productDetails.productsMinSumTotal}
              />
              <ButtonConfiguration
                searchTerm={this.props.productDetails.searchTerm}
                onSearchChange={this._onSearchChange}
                handleReport={this._handleReport}
              >
                <SelectForm
                  productPriceWeek={this.props.productDetails.productPriceWeek}
                  data={this.props.productDetails.data}
                  currProductPriceWeek={
                    this.props.productDetails.currProductPriceWeek
                  }
                  storeProductsData={this.storeProductsData}
                  valueFrom={this.props.productDetails.valueFrom}
                  valueTo={this.props.productDetails.valueTo}
                  setValuePicker={this._setValuePicker}
                  handleChange={this._handleChange}
                />
              </ButtonConfiguration>
              <TableLoad
                tableData={this.props.productDetails.tableData}
                productsMaxSumTotal={
                  this.props.productDetails.productsMaxSumTotal
                }
                productsMinSumTotal={
                  this.props.productDetails.productsMinSumTotal
                }
                searchTerm={this.props.productDetails.searchTerm}
                sortBy={this._sortBy}
                sortStatus={this.props.productDetails.direction}
              />
              {this.props.productDetails.createReport ? (
                <CreateReport
                  product={this.props.productDetails.product}
                  handleReport={this._handleReport}
                  tableData={this.props.productDetails.tableData}
                  valueFrom={this.props.productDetails.valueFrom}
                  valueTo={this.props.productDetails.valueTo}
                >
                  <SelectForm
                    productPriceWeek={
                      this.props.productDetails.productPriceWeek
                    }
                    data={this.props.productDetails.data}
                    currProductPriceWeek={
                      this.props.productDetails.currProductPriceWeek
                    }
                    storeProductsData={this.storeProductsData}
                    valueFrom={this.props.productDetails.valueFrom}
                    valueTo={this.props.productDetails.valueTo}
                    setValuePicker={this._setValuePicker}
                    handleChange={this._handleChange}
                  />
                </CreateReport>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => this.props.loadingToggle(), 1500);
    const id = this.props.match.params.id;
    fetch(`http://159.89.106.160/products/${id}`)
      .then(response => response.json())
      .then(this.storeProductsData)
      .then(data => this.props.storeData(data));
  }

  storeProductsData(data, productPriceWeekNew) {
    const product = data.product.name;
    let productsData = data.data;

    const bannersName = productsData.map(el => el.banner.name);

    productsData.pricingDataByWeek =
      productPriceWeekNew || productsData.pricingDataByWeek;

    const productPrice = productsData.map(el =>
      el.pricingDataByWeek.map(item => item.price)
    );

    // array of pricingDataByWeek -> week
    let productPriceWeek = productsData.map(el =>
      el.pricingDataByWeek.map(item => item.week)
    );

    // Array of max/min data
    const productsMaxSum = productPrice.map(el => Math.max.apply(null, el));
    const productsMinSum = productPrice.map(el => Math.min.apply(null, el));
    // Convert productsPrice into numbers
    const productsConvert = productPrice.map(el => el.map(num => Number(num)));
    // Find average
    const productsAverage = productsConvert.map(el => {
      const sum = el.reduce((a, b) => a + b, 0);
      return Number((sum / el.length).toFixed(2));
    });

    // Max/min number of array
    const productsMaxSumTotal = Math.max.apply(null, productsMaxSum);
    const productsMinSumTotal = Math.min.apply(null, productsMinSum);
    const productsAverageTotal = (
      productsAverage.reduce((a, b) => a + b, 0) / productsAverage.length
    ).toFixed(2);

    // "DataUnStr" - data un structured
    const DataUnStr = {
      bannersName,
      productsMaxSum,
      productsMinSum,
      productsAverage
    };

    // tableData structured array of sorting etc
    let tableData = [];
    for (let i = 0; i <= 7; i++) {
      let obj = {
        bannersName: "",
        productsMaxSum: null,
        productsMinSum: null,
        productsAverage: null
      };
      for (let key in DataUnStr) {
        obj[key] = DataUnStr[key].shift();
      }
      tableData.push(obj);
    }

    this.props.storeProduct(product);
    this.props.storeTableData(tableData);
    this.props.storeProductsMaxSumTotal(productsMaxSumTotal);
    this.props.storeProductsMinSumTotal(productsMinSumTotal);
    this.props.storeProductsAverageTotal(productsAverageTotal);
    this.props.storeProductPriceWeek(productPriceWeek);
    this.props.storeData(data);

    !productPriceWeekNew &&
      this.props.storeCurrProductPriceWeek(productPriceWeek);

    return data;
  }

  _sortBy(key) {
    const data = this.props.productDetails.tableData.slice();
    this.props.storeTableData(
      data.sort(
        (a, b) =>
          this.props.productDetails.direction[key] === "asc"
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
      )
    );
    this.props.setDirectionSort(key);
  }

  _onSearchChange(e) {
    this.props.onSearchChange(e.target.value);
  }

  _handleReport() {
    this.props.createReport(!this.props.productDetails.createReport);
  }

  _handleChange(e) {
    this.props.handleChange(e);
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadingToggle,
      storeData,
      storeProduct,
      storeTableData,
      storeProductsMaxSumTotal,
      storeProductsMinSumTotal,
      storeProductsAverageTotal,
      storeProductPriceWeek,
      storeCurrProductPriceWeek,
      onSearchChange,
      createReport,
      valueFrom,
      valueTo,
      handleChange,
      setDirectionSort
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
