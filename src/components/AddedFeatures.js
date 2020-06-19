import React from 'react';
import AddedFeature from './AddedFeature';
import {connect} from 'react-redux';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can add additional features in the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  };
};

export default connect(mapStateToProps,{})(AddedFeatures);
