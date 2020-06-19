import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state.car);
  return {
    image: state.car.image,
    name: state.car.name,
    price: state.car.price
  };
}

export default connect(mapStateToProps, {})(Header);
