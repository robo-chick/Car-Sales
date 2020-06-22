export const ADD_FEATURE = "ADD_FEATURE";
export const SUBTRACT_FEATURE = "SUBTRACT_FEATURE";

export const addFeature = (feature) => {
    // action object
    console.log(feature);
    return {
        type: ADD_FEATURE,
        payload: {
        id: feature.id,
        name: feature.name, 
        price: feature.price
    }
  };
};

export const subtractFeature = (feature) => {
    // action object
    return {
        type: SUBTRACT_FEATURE,
        payload: 
        {
        id: feature.id,
        name: feature.name,
        price: feature.price
    }
  };
};



