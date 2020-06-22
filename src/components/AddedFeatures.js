import React from 'react';
import AddedFeature from './AddedFeature';
import {useSelector} from 'react-redux';
// import {connect} from 'react-redux';

const AddedFeatures = props => {
  const car = useSelector(state => state.car);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can add additional features in the store.</p>
      )}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     features: state.car.features
//   };
// };

// export default connect(mapStateToProps)(AddedFeatures);

export default AddedFeatures;
