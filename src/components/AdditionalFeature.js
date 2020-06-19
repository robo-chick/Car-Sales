import React from 'react';
import {addFeature} from '../actions/rootActions';
import {useDispatch} from 'react-redux';
// import {connect} from 'react-redux';

const AdditionalFeature = props => {
  const dispatch = useDispatch();

  const handleAddFeature = () => {
    dispatch(addFeature(props.feature));
  }
  console.log(props);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(handleAddFeature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default connect(null, {addFeature})(AdditionalFeature);

export default AdditionalFeature;