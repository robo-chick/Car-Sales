import React from 'react';
import {useSelector} from 'react-redux';
// import {connect} from 'react-redux';

const Header = () => {
  const car = useSelector(state => state.car);

  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

// const mapStateToProps = state => {
//   console.log(state.car);
//   return {
//     image: state.car.image,
//     name: state.car.name,
//     price: state.car.price
//   };
// }

// export default connect(mapStateToProps)(Header);

export default Header;