import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]);
        //You can also do it like this:
        // return [action.payload.data, ...state];
        //how it does work: [city, city, city]
        // how it does not work: [city, [city,city]]
    }

    return state;
}