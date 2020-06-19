import React from 'react';
// import {connect} from 'react-redux';
import {useSelector} from 'react-redux';

const Total = props => {
  const car = useSelector(state => state.car);
  const additionalPrice = useSelector(state => state.additionalPrice);

  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log(state.car.price);
//   return {
//     price: state.car.price,
//     additionalPrice: state.additionalPrice
//   };
// };

// export default connect(mapStateToProps, {})(Total);

export default Total;