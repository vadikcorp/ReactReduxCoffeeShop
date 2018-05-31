import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  handleChange,
  addItem,
  clearInputItem,
  removeStateItem,
  removeItems,
  removeEmailItems,
  backspace,
  isButtonActive,
  emailInputStatusBtn
} from "../../actions/createReport";

import CityChoose from "./CityChoose";
import StateChoose from "./StateChoose";
import SortBy from "./SortBy";
import EmailChoose from "./EmailChoose";
import BtnFooter from "./BtnFooter";

class CreateReport extends React.Component {
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
    this._handleRemoveStateItem = this._handleRemoveStateItem.bind(this);
    this._handleStateKeyDown = this._handleStateKeyDown.bind(this);
    this._handleRemoveItems = this._handleRemoveItems.bind(this);
    this._handleRemoveEmailItems = this._handleRemoveEmailItems.bind(this);
    this._handleInputKeyDown = this._handleInputKeyDown.bind(this);
    this._handleRemoveItems = this._handleRemoveItems.bind(this);
    this._onActiveClassName = this._onActiveClassName.bind(this);
    this._handleEmailInputKeyDown = this._handleEmailInputKeyDown.bind(this);
    this._emailInputStatusBtn = this._emailInputStatusBtn.bind(this);
  }

  _handleRemoveItems(index) {
    this.props.removeItems(index);
  }

  _handleRemoveEmailItems(index) {
    this.props.removeEmailItems(index);
  }

  _handleRemoveStateItem(index) {
    this.props.removeStateItem(index);
  }

  _handleChange(e) {
    this.props.handleChange(e);
  }

  _handleStateKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.addItem(e);
      this.props.clearInputItem(e);
    }
  }
  _handleInputKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.addItem(e);
      this.props.clearInputItem(e);
    }
    if (e.keyCode === 8) {
      this.props.backspace(e);
    }
  }

  _handleEmailInputKeyDown(e) {
    // PROBLEM
    if (e.keyCode === 13) {
      this.props.addItem(e);
      this.props.clearInputItem(e);
      this.props.emailInputStatusBtn();
    }
    if (e.keyCode === 8) {
      this.props.backspace(e);
    }
  }

  _onActiveClassName(index) {
    let copy = this.props.createReport.isButtonActive.slice();
    copy[index].isActive = !copy[index].isActive;
    this.props.isButtonActive(copy);
  }

  _emailInputStatusBtn() {
    this.props.emailInputStatusBtn();
  }

  _sendReport(email, product, data, valueFrom, valueTo) {
    fetch("http://159.89.106.160/products/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        to: email,
        product: product,
        dates: `${valueFrom} ${valueTo}`,
        data: data.map((el, i) => {
          return {
            name: data[i].bannersName,
            max: data[i].productsMaxSum,
            min: data[i].productsMinSum
          };
        })
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });
  }

  render() {
    const {
      product,
      handleReport,
      tableData,
      valueFrom,
      valueTo,
      children
    } = this.props;
    return (
      <div className="popup">
        <div className="popup_inner">
          <p className="main_head_p">Create Report</p>
          <p className="product_head_p">{product}</p>
          <div className="field_block">
            <p className="field_head_p">Period</p>
            {children}
          </div>
          <StateChoose
            stateItems={this.props.createReport.stateItems}
            stateInput={this.props.createReport.stateInput}
            handleRemoveStateItem={this._handleRemoveStateItem}
            handleChange={this._handleChange}
            handleStateKeyDown={this._handleStateKeyDown}
          />
          <CityChoose
            items={this.props.createReport.items}
            input={this.props.createReport.input}
            handleChange={this._handleChange}
            handleRemoveItem={this._handleRemoveItems}
            handleInputKeyDown={this._handleInputKeyDown}
          />
          <SortBy
            isButtonActive={this.props.createReport.isButtonActive}
            onActiveClassName={this._onActiveClassName}
          />
          <EmailChoose
            emailInput={this.props.createReport.emailInput}
            emailItems={this.props.createReport.emailItems}
            handleRemoveEmailItems={this._handleRemoveEmailItems}
            emailInputStatus={this.props.createReport.emailInputStatus}
            handleChange={this._handleChange}
            handleEmailInputKeyDown={this._handleEmailInputKeyDown}
            emailInputStatusBtn={this._emailInputStatusBtn}
          />
          <BtnFooter
            handleReport={handleReport}
            sendReport={this._sendReport}
            emailItems={this.props.createReport.emailItems}
            product={product}
            tableData={tableData}
            valueFrom={valueFrom}
            valueTo={valueTo}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleChange,
      addItem,
      clearInputItem,
      removeStateItem,
      removeItems,
      removeEmailItems,
      backspace,
      isButtonActive,
      emailInputStatusBtn
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(CreateReport);
