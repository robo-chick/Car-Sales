import React from 'react';
import {addFeature} from '../actions/rootActions';
import {useSelector, useDispatch} from 'react-redux';
// import {connect} from 'react-redux';

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  const add = item => dispatch(addFeature(item));
  const car = useSelector(state => {
    return state.car;
  });


  const handleAddFeature = (feature) => {
    let hasFeature = false;
    if(car.features.length === 0) {
      add(feature);
      hasFeature = true;
    }
    car.features.map(f => {
      if (f.id === feature.id) {
        hasFeature = true;
      }
    });
    if(!hasFeature) {
      add(feature);
    }
  };

 

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        id={props.feature.id}
        className='button'
        onClick={ () => handleAddFeature(props.feature)}>
        Add
      </button>
      {props.feature.name} (+${props.feature.price})
    </li>
  );
};


// export default connect(null, {addFeature})(AdditionalFeature);

export default AdditionalFeature;