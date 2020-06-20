import React from 'react';
import {subtractFeature} from '../actions/rootActions';
import {useDispatch} from 'react-redux';
// import {connect} from 'react-redux';

const AddedFeature = props => {
  const dispatch = useDispatch();

  const handleSubtractFeature = (feature) => {
    dispatch(subtractFeature(feature));
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => handleSubtractFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

// export default connect(null, {subtractFeature})(AddedFeature);

export default AddedFeature;