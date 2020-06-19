import {ADD_FEATURE, SUBTRACT_FEATURE} from '../actions/rootActions';


const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state,
                additionalFeatures: state.additionalFeatures.filter((feature) => {
                    if(feature !== action.payload) {
                        return feature
                    } else {
                        return null
                    }
                }),

                car: {
                    ...state.car,
                    price: state.car.price + action.payload.price,
                    features: [...state.car.features, action.payload]
                },
                additionalPrice: action.payload.price + state.additionalPrice
            }

            // remove features from additionalFeatures
            // add features to car.features
            // add feature price to car.price

        case SUBTRACT_FEATURE:
            return {
                ...state,
                additionalFeatures: [...state.additionalFeatures, action.payload],
                car: {
                    ...state.car,
                    price: state.car.price - action.payload.price,
                    features: state.car.features.filter(feature => {
                        if(feature !== action.payload) {
                            return feature
                        } else {
                            return null
                        }
                    })
                },
                additionalPrice: state.additionalPrice - action.payload.price
                // add feature to additionalFeatures
                // remove feature from car.features
                // remove feature price to car.price
            }
            default:
                return state;
    }
}