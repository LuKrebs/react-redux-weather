import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    console.log(action);

    switch (action.type) {
    case FETCH_WEATHER:
        console.log('state:')
        console.log(state);
        return [ action.payload.data, ...state ];
    }

    return state;
}