import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {useSelector} from 'react-redux';
// import {connect} from 'react-redux';

const AdditionalFeatures = () => {
  const additionalFeatures = useSelector(state => state.additionalFeatures);
  console.log(additionalFeatures);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Sweet ride!</p>
      )}
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log(state.additionalFeatures);
//   return {
//     additionalFeatures: state.additionalFeatures
//   };
// };

// export default connect(mapStateToProps,{})(AdditionalFeatures);

export default AdditionalFeatures;
