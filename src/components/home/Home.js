import americano from "../../styles/img/americano.png";
import cappuccino from "../../styles/img/cappuccino.png";
import doppio from "../../styles/img/doppio.png";
import expresso from "../../styles/img/espresso.png";
import lango from "../../styles/img/lango.png";
import ristretto from "../../styles/img/ristretto.png";

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";

import { storeProducts } from "../../actions/home";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.storeProducts = this.storeProducts.bind(this);
  }

  render() {
    const coffee = [americano, cappuccino, doppio, expresso, lango, ristretto];
    return (
      <div className="home-container home">
        <p className="hero_name">Home</p>
        <div className="hero_wrapper">
          <div className="col-lg-12">
            <div className="row">
              {this.props.home.products.map((el, i) => {
                return (
                  <div key={i} className="col-lg-2">
                    <span onClick={() => this.props.changePage(el)}>
                      <div className="box">
                        <div className="box_content">
                          <div>
                            <img src={coffee[i]} alt={coffee[i]} />
                          </div>
                          <p>{el.name}</p>
                        </div>
                      </div>
                    </span>
                  </div>
                );
              })}

              <div className="col-lg-2">
                <div className="box">
                  <div className="box_content">
                    <p className="plus">+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    fetch("http://159.89.106.160/products")
      .then(response => response.json())
      .then(this.storeProducts);
  }

  storeProducts(data) {
    let products = data.data;
    this.props.storeProducts(products);
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: el => push(`/products/${el.id}`),
      storeProducts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
